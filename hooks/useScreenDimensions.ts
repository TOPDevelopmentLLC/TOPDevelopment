import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

interface ScreenDimensions {
  pageWidth: number;
  pageHeight: number;
}

/**
 * Custom hook to get screen dimensions
 * Automatically updates when screen size changes (orientation, window resize)
 */
export const useScreenDimensions = (): ScreenDimensions => {
  const [dimensions, setDimensions] = useState<ScreenDimensions>(() => {
    const { width, height } = Dimensions.get('window');
    return { pageWidth: width, pageHeight: height };
  });

  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => {
      setDimensions({ pageWidth: window.width, pageHeight: window.height });
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => subscription?.remove();
  }, []);

  return dimensions;
};
