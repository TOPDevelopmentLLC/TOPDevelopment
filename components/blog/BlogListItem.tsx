import { Card, CardContent } from 'components/layout/card';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { BlogPost } from 'lib/data/blog';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface BlogListItemProps {
  post: BlogPost;
  onPress: () => void;
}

export function BlogListItem({ post, onPress }: BlogListItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.cardPressed]}
    >
      <Card style={styles.card}>
        <CardContent style={styles.cardContent}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{post.category}</Text>
          </View>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.excerpt}>{post.excerpt}</Text>
          <View style={styles.meta}>
            <View style={styles.metaItem}>
              <IconContainer
                iconProps={{ name: 'person', size: 14, color: Colors.text.secondary, type: IconType.MaterialIcons }}
              />
              <Text style={styles.metaText}>{post.author}</Text>
            </View>
            <View style={styles.metaItem}>
              <IconContainer
                iconProps={{ name: 'calendar-today', size: 14, color: Colors.text.secondary, type: IconType.MaterialIcons }}
              />
              <Text style={styles.metaText}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </Text>
            </View>
          </View>
          <View style={styles.readMore}>
            <Text style={styles.readMoreText}>Read More</Text>
            <IconContainer
              iconProps={{ name: 'arrow-forward', size: 16, color: Colors.brand.primary, type: IconType.MaterialIcons }}
            />
          </View>
        </CardContent>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 350,
    minWidth: 280,
  },
  cardPressed: {
    opacity: 0.8,
  },
  cardContent: {
    padding: Spacing.xl * 2,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(234, 35, 32, 0.15)',
    borderRadius: 20,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.md,
  },
  categoryText: {
    fontSize: Typography.xs,
    fontFamily: FontFamily.secondary,
    color: Colors.brand.primary,
    fontWeight: '500',
  },
  title: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
  },
  excerpt: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    marginBottom: Spacing.lg,
  },
  meta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  metaText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  readMore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  readMoreText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.brand.primary,
    fontWeight: '500',
  },
});
