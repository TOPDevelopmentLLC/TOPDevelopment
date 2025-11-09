import React from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { Colors, BorderRadius, Spacing, FontFamily, FontSize } from '../../constants/theme';

interface TextareaProps extends Omit<TextInputProps, 'style'> {
  style?: ViewStyle;
  className?: string; // Keep for compatibility
  rows?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  style,
  rows = 4,
  placeholderTextColor = Colors.text.secondary,
  ...props
}) => {
  return (
    <TextInput
      style={[
        styles.textarea,
        { minHeight: rows * 24 + Spacing.sm * 2 },
        style,
      ]}
      multiline
      numberOfLines={rows}
      textAlignVertical="top"
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  textarea: {
    backgroundColor: Colors.background.gray,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: FontSize.md,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    minHeight: 100,
  },
});
