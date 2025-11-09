import React from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { Colors, BorderRadius, Spacing, FontFamily, FontSize } from '../../constants/theme';

interface InputProps extends Omit<TextInputProps, 'style'> {
  style?: ViewStyle;
  className?: string; // Keep for compatibility
  type?: string; // Keep for compatibility but won't use
}

export const Input: React.FC<InputProps> = ({
  style,
  className,
  type,
  placeholderTextColor = Colors.text.secondary,
  ...props
}) => {
  // Handle keyboard type based on type prop
  const getKeyboardType = () => {
    if (type === 'email') return 'email-address';
    if (type === 'tel') return 'phone-pad';
    if (type === 'number') return 'numeric';
    return 'default';
  };

  const getSecureTextEntry = () => {
    return type === 'password';
  };

  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={placeholderTextColor}
      keyboardType={getKeyboardType()}
      secureTextEntry={getSecureTextEntry()}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.background.gray,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: FontSize.md,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    minHeight: 44,
  },
});
