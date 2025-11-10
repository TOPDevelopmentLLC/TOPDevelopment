import React from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Button } from 'components/buttons/button';
import { Colors, Spacing } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import { FontFamily } from 'constants/theme';

interface SecondaryButtonProps {
  onPress: () => void;
  children: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function SecondaryButton({ onPress, children, style, textStyle }: SecondaryButtonProps) {
  return (
    <Button onPress={onPress} variant="outline" style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'rgba(255, 255, 255, 0.2)',
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
