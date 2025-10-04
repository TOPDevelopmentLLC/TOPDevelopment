/**
 * Global styles for TOP Development website
 * Import and use these common styles across components
 */

import { StyleSheet } from 'react-native';
import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from './theme';

export const globalStyles = StyleSheet.create({
  // Text Styles
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
