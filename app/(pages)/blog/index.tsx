import { BlogList } from 'components/blog/BlogList';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { Spacing } from 'constants/theme';
import { Redirect, router } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import { blogPosts } from 'lib/data/blog';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Blog = () => {
  const { isAuthenticated } = useAuth();

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
          <BlogList posts={blogPosts} onSelectPost={handleSelectPost} />
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
});

export default Blog;
