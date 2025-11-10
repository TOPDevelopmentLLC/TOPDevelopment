import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { Colors, FontFamily, FontSize, Spacing } from 'constants/theme';

interface LabelProps {
  children?: React.ReactNode;
  htmlFor?: string; // Keep for compatibility
  style?: TextStyle;
  className?: string; // Keep for compatibility
}

export const Label: React.FC<LabelProps> = ({
  children,
  style,
}) => {
  return (
    <Text style={[styles.label, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
});
