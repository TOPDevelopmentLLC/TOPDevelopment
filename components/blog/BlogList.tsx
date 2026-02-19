import { BlogListItem } from 'components/blog/BlogListItem';
import { Spacing } from 'constants/theme';
import { BlogPost } from 'lib/data/blog';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface BlogListProps {
  posts: BlogPost[];
  onSelectPost: (id: string) => void;
}

export function BlogList({ posts, onSelectPost }: BlogListProps) {
  return (
    <View style={styles.grid}>
      {posts.map((post) => (
        <BlogListItem
          key={post.id}
          post={post}
          onPress={() => onSelectPost(post.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
});
