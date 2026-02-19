import axios from 'axios';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { router, useLocalSearchParams } from 'expo-router';
import { BlogPostDetail } from 'lib/data/blog';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const BlogDetailPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://api.thatoneprogrammer.dev/api/v1/blogs/${id}`,
          { timeout: 10000 }
        );
        setPost(response.data);
      } catch (err: any) {
        console.error('Failed to fetch blog post:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <BasePage>
        <HeroSection badge="Blog" title="Loading..." subtitle="" />
        <View style={styles.contentSection}>
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={Colors.brand.primary} />
          </View>
        </View>
      </BasePage>
    );
  }

  if (!post) {
    return (
      <BasePage>
        <HeroSection
          badge="Blog"
          title="Post Not Found"
          subtitle="The blog post you're looking for doesn't exist"
        />
        <View style={styles.contentSection}>
          <View style={styles.contentContainer}>
            <PrimaryButton onPress={() => router.push('/blog' as any)}>
              Back to Blog
            </PrimaryButton>
          </View>
        </View>
      </BasePage>
    );
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <BasePage>
      <HeroSection
        badge="Blog"
        title={post.title}
        subtitle={`By ${post.authorEmail} · ${formattedDate}`}
      />

      <View style={styles.contentSection}>
        <View style={styles.contentContainer}>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <IconContainer
                iconProps={{ name: 'person', size: 16, color: Colors.text.secondary, type: IconType.MaterialIcons }}
              />
              <Text style={styles.metaText}>{post.authorEmail}</Text>
            </View>
            <View style={styles.metaItem}>
              <IconContainer
                iconProps={{ name: 'calendar-today', size: 16, color: Colors.text.secondary, type: IconType.MaterialIcons }}
              />
              <Text style={styles.metaText}>{formattedDate}</Text>
            </View>
          </View>

          <style dangerouslySetInnerHTML={{ __html: blogContentStyles }} />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <View style={styles.backButton}>
            <PrimaryButton onPress={() => router.push('/blog' as any)}>
              Back to Blog
            </PrimaryButton>
          </View>
        </View>
      </View>
    </BasePage>
  );
};

const blogContentStyles = `
  .blog-content {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.secondary};
    font-size: ${Typography.base}px;
    line-height: 1.75;
  }
  .blog-content h1 {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.primary};
    font-size: ${Typography['2xl']}px;
    font-weight: bold;
    margin-top: ${Spacing.xl * 2}px;
    margin-bottom: ${Spacing.lg}px;
  }
  .blog-content h2 {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.primary};
    font-size: ${Typography.xl}px;
    font-weight: bold;
    margin-top: ${Spacing.xl * 1.5}px;
    margin-bottom: ${Spacing.md}px;
  }
  .blog-content h3 {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.primary};
    font-size: ${Typography.lg}px;
    font-weight: 500;
    margin-top: ${Spacing.xl}px;
    margin-bottom: ${Spacing.sm}px;
  }
  .blog-content p {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.secondary};
    font-size: ${Typography.base}px;
    line-height: 1.75;
    margin-bottom: ${Spacing.md}px;
  }
  .blog-content strong {
    font-weight: bold;
    color: ${Colors.text.primary};
  }
  .blog-content em {
    font-style: italic;
    color: ${Colors.text.secondary};
  }
  .blog-content a {
    color: ${Colors.brand.primary};
    text-decoration: underline;
  }
  .blog-content blockquote {
    background-color: rgba(255, 255, 255, 0.05);
    border-left: 4px solid ${Colors.brand.primary};
    padding: ${Spacing.md}px ${Spacing.lg}px;
    margin: ${Spacing.md}px 0;
  }
  .blog-content code {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${Colors.brand.primary};
    font-family: monospace;
    padding: 2px ${Spacing.xs}px;
    border-radius: 4px;
  }
  .blog-content pre {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: ${Spacing.md}px;
    font-family: monospace;
    font-size: ${Typography.sm}px;
    color: ${Colors.text.primary};
    margin: ${Spacing.md}px 0;
    overflow-x: auto;
  }
  .blog-content pre code {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    color: inherit;
  }
  .blog-content ul, .blog-content ol {
    margin-bottom: ${Spacing.md}px;
    padding-left: ${Spacing.xl}px;
  }
  .blog-content li {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.secondary};
    font-size: ${Typography.base}px;
    margin-bottom: ${Spacing.xs}px;
  }
  .blog-content hr {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    height: 1px;
    margin: ${Spacing.xl}px 0;
  }
  .blog-content table {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin: ${Spacing.md}px 0;
    border-collapse: collapse;
    width: 100%;
  }
  .blog-content thead {
    background-color: rgba(255, 255, 255, 0.05);
  }
  .blog-content th {
    color: ${Colors.text.primary};
    font-family: ${FontFamily.secondary};
    font-weight: bold;
    padding: ${Spacing.sm}px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .blog-content td {
    color: ${Colors.text.secondary};
    font-family: ${FontFamily.secondary};
    padding: ${Spacing.sm}px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .blog-content img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: ${Spacing.md}px 0;
  }
`;

const styles = StyleSheet.create({
  contentSection: {
    paddingVertical: Spacing.xl * 2,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 800,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  centered: {
    alignItems: 'center',
    paddingVertical: Spacing.xl * 2,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xl,
    marginBottom: Spacing.xl,
    paddingBottom: Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  metaText: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  backButton: {
    marginTop: Spacing.xl * 2,
    alignItems: 'flex-start',
  },
});

export default BlogDetailPage;
