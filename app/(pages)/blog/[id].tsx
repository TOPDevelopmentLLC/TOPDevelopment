import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import { blogPosts } from 'lib/data/blog';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

const BlogDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  const post = blogPosts.find((p) => p.id === id);

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

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <BasePage>
      <HeroSection
        badge={post.category}
        title={post.title}
        subtitle={`By ${post.author} · ${formattedDate}`}
      />

      <View style={styles.contentSection}>
        <View style={styles.contentContainer}>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <IconContainer
                iconProps={{ name: 'person', size: 16, color: Colors.text.secondary, type: IconType.MaterialIcons }}
              />
              <Text style={styles.metaText}>{post.author}</Text>
            </View>
            <View style={styles.metaItem}>
              <IconContainer
                iconProps={{ name: 'calendar-today', size: 16, color: Colors.text.secondary, type: IconType.MaterialIcons }}
              />
              <Text style={styles.metaText}>{formattedDate}</Text>
            </View>
          </View>

          <Markdown style={markdownStyles}>
            {post.content}
          </Markdown>

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

const markdownStyles = StyleSheet.create({
  body: {
    color: Colors.text.primary,
    fontFamily: FontFamily.secondary,
    fontSize: Typography.base,
    lineHeight: 28,
  },
  heading1: {
    color: Colors.text.primary,
    fontFamily: FontFamily.primary,
    fontSize: Typography['2xl'],
    fontWeight: 'bold',
    marginTop: Spacing.xl * 2,
    marginBottom: Spacing.lg,
  },
  heading2: {
    color: Colors.text.primary,
    fontFamily: FontFamily.primary,
    fontSize: Typography.xl,
    fontWeight: 'bold',
    marginTop: Spacing.xl * 1.5,
    marginBottom: Spacing.md,
  },
  heading3: {
    color: Colors.text.primary,
    fontFamily: FontFamily.primary,
    fontSize: Typography.lg,
    fontWeight: '500',
    marginTop: Spacing.xl,
    marginBottom: Spacing.sm,
  },
  paragraph: {
    color: Colors.text.primary,
    fontFamily: FontFamily.secondary,
    fontSize: Typography.base,
    lineHeight: 28,
    marginBottom: Spacing.md,
  },
  strong: {
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  em: {
    fontStyle: 'italic',
    color: Colors.text.secondary,
  },
  link: {
    color: Colors.brand.primary,
    textDecorationLine: 'underline',
  },
  blockquote: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderLeftWidth: 4,
    borderLeftColor: Colors.brand.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    marginVertical: Spacing.md,
  },
  code_inline: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: Colors.brand.primary,
    fontFamily: 'monospace',
    paddingHorizontal: Spacing.xs,
    borderRadius: 4,
  },
  code_block: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.md,
    fontFamily: 'monospace',
    fontSize: Typography.sm,
    color: Colors.text.primary,
  },
  fence: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.md,
    fontFamily: 'monospace',
    fontSize: Typography.sm,
    color: Colors.text.primary,
    marginVertical: Spacing.md,
  },
  bullet_list: {
    marginBottom: Spacing.md,
  },
  ordered_list: {
    marginBottom: Spacing.md,
  },
  list_item: {
    color: Colors.text.primary,
    fontFamily: FontFamily.secondary,
    fontSize: Typography.base,
    marginBottom: Spacing.xs,
  },
  hr: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 1,
    marginVertical: Spacing.xl,
  },
  table: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: Spacing.md,
  },
  thead: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  th: {
    color: Colors.text.primary,
    fontFamily: FontFamily.secondary,
    fontWeight: 'bold',
    padding: Spacing.sm,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  td: {
    color: Colors.text.secondary,
    fontFamily: FontFamily.secondary,
    padding: Spacing.sm,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
});

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

export default BlogDetail;
