/**
 * Centralized theme constants for TOP Development website
 */

import { Platform } from 'react-native';

// Brand Colors
export const Colors = {
  brand: {
    primary: '#ea2320',      // TOP Development red
    primaryDark: '#8c1513',  // Darker red for backgrounds
    black: '#000000',
    white: '#FFFFFF',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B4B4B4',
    tertiary: '#4D4D4D',
  },
  background: {
    dark: '#000000',
    gray: '#4D4D4D',
    muted: '#1a1a1a',        // Muted background for skeleton loaders
    red: '#ea2320',
    redDark: '#8c1513',
  },
  border: {
    primary: '#4D4D4D',      // Default border color
    secondary: '#B4B4B4',
  },
};

// Typography
export const FontFamily = {
  primary: 'Audiowide',  // Headers, titles, menu items
  secondary: 'NotoSans', // Body text, descriptions
};

export const FontSize = {
  xl: 48,      // Page titles
  lg: 24,      // Section titles
  md: 18,      // Body text, subtitles
  sm: 16,      // Smaller text
  xs: 14,      // Extra small text
};

// Spacing
export const Spacing = {
  xs: 4,
  sm: 10,
  md: 16,
  lg: 20,
  xl: 32,
  xxl: 50,
};

// Border Radius
export const BorderRadius = {
  sm: 8,
  md: 16,
  lg: 32,
  xl: 48,
};

// Legacy Fonts (for platform-specific needs)
export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
