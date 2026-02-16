import axios from 'axios';
import { BlogList } from 'components/blog/BlogList';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { Redirect, router } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import { BlogPost } from 'lib/data/blog';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Blog = () => {
  const { isAuthenticated, userId } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated || !userId) return;

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://api.thatoneprogrammer.dev/api/v1/blogs/user/${userId}`,
          {
            params: { page: 0, size: 10 },
            timeout: 10000,
          }
        );
        setPosts(response.data.content);
      } catch (err: any) {
        console.error('Failed to fetch blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [isAuthenticated, userId]);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  const handleSelectPost = (id: string) => {
    router.push(`/blog/${id}` as any);
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
            <BlogList posts={posts} onSelectPost={handleSelectPost} />
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
});

export default Blog;
