import axios from 'axios';
import { BlogList } from 'components/blog/BlogList';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { router } from 'expo-router';
import { BlogPost } from 'lib/data/blog';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

const PAGE_SIZE = 10;

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          'https://api.thatoneprogrammer.dev/api/v1/blogs',
          {
            params: { domain: 'thatoneprogrammer.dev', page: currentPage, size: PAGE_SIZE },
            timeout: 10000,
          }
        );
        setPosts(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (err: any) {
        console.error('Failed to fetch blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handleSelectPost = (id: string) => {
    router.push(`/blog/${id}` as any);
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <BasePage>
      <HeroSection
        badge="Blog"
        title="Insights & Updates"
        subtitle="Thoughts on software development, infrastructure, and building great products"
      />

      <View style={styles.listSection}>
        <View style={styles.listContainer}>
          {isLoading ? (
            <View style={styles.centered}>
              <ActivityIndicator size="large" color={Colors.brand.primary} />
            </View>
          ) : error ? (
            <View style={styles.centered}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : posts.length === 0 ? (
            <View style={styles.centered}>
              <Text style={styles.emptyText}>No blog posts yet</Text>
            </View>
          ) : (
            <>
              <BlogList posts={posts} onSelectPost={handleSelectPost} />

              {totalPages > 1 && (
                <View style={styles.pagination}>
                  <Pressable
                    onPress={handlePrevious}
                    disabled={currentPage === 0}
                    style={({ pressed }) => [
                      styles.pageButton,
                      currentPage === 0 && styles.pageButtonDisabled,
                      pressed && currentPage > 0 && styles.pageButtonPressed,
                    ]}
                  >
                    <IconContainer
                      iconProps={{
                        name: 'chevron-left',
                        size: 20,
                        color: currentPage === 0 ? Colors.text.tertiary : Colors.text.primary,
                        type: IconType.MaterialIcons,
                      }}
                    />
                    <Text style={[styles.pageButtonText, currentPage === 0 && styles.pageButtonTextDisabled]}>
                      Previous
                    </Text>
                  </Pressable>

                  <Text style={styles.pageInfo}>
                    Page {currentPage + 1} of {totalPages}
                  </Text>

                  <Pressable
                    onPress={handleNext}
                    disabled={currentPage >= totalPages - 1}
                    style={({ pressed }) => [
                      styles.pageButton,
                      currentPage >= totalPages - 1 && styles.pageButtonDisabled,
                      pressed && currentPage < totalPages - 1 && styles.pageButtonPressed,
                    ]}
                  >
                    <Text style={[styles.pageButtonText, currentPage >= totalPages - 1 && styles.pageButtonTextDisabled]}>
                      Next
                    </Text>
                    <IconContainer
                      iconProps={{
                        name: 'chevron-right',
                        size: 20,
                        color: currentPage >= totalPages - 1 ? Colors.text.tertiary : Colors.text.primary,
                        type: IconType.MaterialIcons,
                      }}
                    />
                  </Pressable>
                </View>
              )}
            </>
          )}
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  listSection: {
    paddingVertical: Spacing.xl * 2,
  },
  listContainer: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  centered: {
    alignItems: 'center',
    paddingVertical: Spacing.xl * 2,
  },
  errorText: {
    fontSize: Typography.lg,
    fontFamily: FontFamily.secondary,
    color: Colors.brand.primary,
  },
  emptyText: {
    fontSize: Typography.lg,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xl,
    marginTop: Spacing.xl * 2,
  },
  pageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  pageButtonDisabled: {
    borderColor: 'rgba(255, 255, 255, 0.05)',
    opacity: 0.5,
  },
  pageButtonPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  pageButtonText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  pageButtonTextDisabled: {
    color: Colors.text.tertiary,
  },
  pageInfo: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
});

export default Blog;
