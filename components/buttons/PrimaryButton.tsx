import React from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Button } from 'components/buttons/button';
import { Colors, Spacing } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import { FontFamily } from 'constants/theme';

interface PrimaryButtonProps {
  onPress: () => void;
  children: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function PrimaryButton({ onPress, children, style, textStyle }: PrimaryButtonProps) {
  return (
    <Button onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.brand.primary,
    paddingHorizontal: Spacing.xl * 2,
    paddingVertical: Spacing.lg * 1.5,
  },
  text: {
    color: Colors.text.primary,
    fontSize: Typography.lg,
    fontFamily: FontFamily.secondary,
    fontWeight: '500',
  },
});
