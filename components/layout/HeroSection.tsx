import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Badge } from 'components/data/badge';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  style?: ViewStyle;
}

export function HeroSection({ badge, title, subtitle, children, style }: HeroSectionProps) {
  return (
    <View style={[styles.heroSection, style]}>
      <View style={styles.heroContent}>
        <View style={styles.heroInner}>
          {badge && (
            <Badge style={styles.badge} textStyle={styles.badgeText}>
              {badge}
            </Badge>
          )}
          <Text style={styles.heroTitle}>{title}</Text>
          <Text style={styles.heroSubtitle}>{subtitle}</Text>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    minHeight: '90vh' as any,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    zIndex: 10,
  },
  heroInner: {
    maxWidth: 896,
    alignItems: 'center',
    gap: Spacing.lg,
  },
  badge: {
    backgroundColor: 'rgba(234, 35, 32, 0.1)',
    borderColor: 'rgba(234, 35, 32, 0.3)',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.md,
    alignSelf: 'center',
  },
  badgeText: {
    color: Colors.brand.primary,
  },
  heroTitle: {
    fontSize: Typography['2xl'] * 2,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 672,
  },
});
