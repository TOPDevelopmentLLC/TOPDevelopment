import React from 'react';
import { Toaster as Sonner } from 'sonner';

// React Native compatible Toaster component
// Note: sonner library works with react-native-web for Expo
const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="dark"
      position="top-center"
      {...props}
    />
  );
};

export { Toaster };
