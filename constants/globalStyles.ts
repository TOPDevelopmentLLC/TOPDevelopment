/**
 * Global styles for TOP Development website
 * Import and use these common styles across components
 * Migrated from temp/globals.css
 */

import { StyleSheet } from 'react-native';
import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from './theme';

// Typography sizes matching globals.css
export const Typography = {
  '2xl': 30,
  'xl': 24,
  'lg': 20,
  'base': 16,
  'sm': 14,
  'xs': 12,
};

// Font weights from globals.css
export const FontWeight = {
  medium: '500' as const,
  normal: '400' as const,
};

export const globalStyles = StyleSheet.create({
  // Base Typography Styles (from globals.css)
  h1: {
    fontSize: Typography['2xl'],
    fontWeight: FontWeight.medium,
    lineHeight: Typography['2xl'] * 1.5,
    color: Colors.text.primary,
    fontFamily: FontFamily.primary,
  },
  h2: {
    fontSize: Typography.xl,
    fontWeight: FontWeight.medium,
    lineHeight: Typography.xl * 1.5,
    color: Colors.text.primary,
    fontFamily: FontFamily.primary,
  },
  h3: {
    fontSize: Typography.lg,
    fontWeight: FontWeight.medium,
    lineHeight: Typography.lg * 1.5,
    color: Colors.text.primary,
    fontFamily: FontFamily.secondary,
  },
  h4: {
    fontSize: Typography.base,
    fontWeight: FontWeight.medium,
    lineHeight: Typography.base * 1.5,
    color: Colors.text.primary,
    fontFamily: FontFamily.secondary,
  },
  p: {
    fontSize: Typography.base,
    fontWeight: FontWeight.normal,
    lineHeight: Typography.base * 1.5,
    color: Colors.text.primary,
    fontFamily: FontFamily.secondary,
  },
  label: {
    fontSize: Typography.base,
    fontWeight: FontWeight.medium,
    lineHeight: Typography.base * 1.5,
    color: Colors.text.primary,
    fontFamily: FontFamily.secondary,
  },
  button: {
    fontSize: Typography.base,
    fontWeight: FontWeight.medium,
    lineHeight: Typography.base * 1.5,
    fontFamily: FontFamily.secondary,
  },
  input: {
    fontSize: Typography.base,
    fontWeight: FontWeight.normal,
    lineHeight: Typography.base * 1.5,
    fontFamily: FontFamily.secondary,
  },

  // Legacy Text Styles
  titleXL: {
    fontSize: FontSize.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
  },
  titleLG: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
  },
  subtitle: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
  },
  bodyText: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
  },

  // Container Styles
  centerContainer: {
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
  },
  rowContainerRed: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.background.redDark,
  },
  scrollContainer: {
    alignItems: 'center',
  },

  // Layout Styles
  backgroundGradient: {
    flex: 1,
  },
  absolutePosition: {
    position: 'absolute',
  },

  // Component Styles
  menuBar: {
    flexDirection: 'row',
    backgroundColor: Colors.background.gray,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.sm,
  },
  menuButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
  },
  menuButtonText: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.primary,
  },

  // Icon Styles
  iconContainer: {
    padding: Spacing.xs,
    flexDirection: 'row',
    gap: Spacing.md,
    alignItems: 'center',
  },
  iconText: {
    color: Colors.text.primary,
    fontFamily: FontFamily.primary,
  },

  // Image Styles
  imageRounded: {
    borderRadius: BorderRadius.md,
  },

  // Form Styles
  formContainer: {
    gap: Spacing.lg,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
