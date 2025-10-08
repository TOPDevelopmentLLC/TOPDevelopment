import { useScreenDimensions } from './useScreenDimensions';

interface ResponsiveValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  contentWidth: number;
  columnCount: number;
  fontSize: {
    scale: number;
  };
}

/**
 * Custom hook for responsive design breakpoints and values
 * Breakpoints:
 * - Mobile: < 768px
 * - Tablet: 768px - 1024px
 * - Desktop: > 1024px
 */
export const useResponsive = (): ResponsiveValues => {
  const { pageWidth } = useScreenDimensions();

  const isMobile = pageWidth < 768;
  const isTablet = pageWidth >= 768 && pageWidth < 1024;
  const isDesktop = pageWidth >= 1024;

  // Content width adjusts based on screen size
  const contentWidth = isMobile
    ? pageWidth * 0.9
    : isTablet
    ? pageWidth * 0.8
    : pageWidth * 0.6;

  // Column count for grid layouts
  const columnCount = isMobile ? 1 : isTablet ? 2 : 2;

  // Font scale for responsive text
  const fontSize = {
    scale: isMobile ? 0.85 : isTablet ? 0.95 : 1,
  };

  return {
    isMobile,
    isTablet,
    isDesktop,
    contentWidth,
    columnCount,
    fontSize,
  };
};
