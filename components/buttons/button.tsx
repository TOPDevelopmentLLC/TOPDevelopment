import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator, View } from 'react-native';
import { Colors, BorderRadius, Spacing, FontFamily, FontSize } from 'constants/theme';

interface ButtonProps {
  onPress?: () => void;
  onClick?: () => void; // Alias for compatibility
  children?: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary' | 'link';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  className?: string; // Keep for compatibility but won't use
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  onClick,
  children,
  variant = 'default',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const handlePress = onPress || onClick;

  const getButtonStyle = (): ViewStyle => {
    const baseStyle = styles.button;

    switch (variant) {
      case 'outline':
        return { ...baseStyle, ...styles.outlineButton };
      case 'ghost':
        return { ...baseStyle, ...styles.ghostButton };
      case 'destructive':
        return { ...baseStyle, ...styles.destructiveButton };
      case 'secondary':
        return { ...baseStyle, ...styles.secondaryButton };
      case 'link':
        return { ...baseStyle, ...styles.linkButton };
      default:
        return { ...baseStyle, ...styles.defaultButton };
    }
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle = styles.text;

    switch (variant) {
      case 'outline':
      case 'ghost':
        return { ...baseStyle, ...styles.outlineText };
      case 'destructive':
        return { ...baseStyle, ...styles.destructiveText };
      case 'secondary':
        return { ...baseStyle, ...styles.secondaryText };
      case 'link':
        return { ...baseStyle, ...styles.linkText };
      default:
        return { ...baseStyle, ...styles.defaultText };
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        getButtonStyle(),
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' || variant === 'ghost' ? Colors.text.primary : Colors.text.primary}
        />
      ) : typeof children === 'string' ? (
        <Text style={[getTextStyle(), textStyle]}>
          {children}
        </Text>
      ) : (
        <View style={styles.childrenContainer}>
          {children}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: Spacing.sm,
    minHeight: 44,
  },
  defaultButton: {
    backgroundColor: Colors.brand.primary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  destructiveButton: {
    backgroundColor: '#dc2626',
  },
  secondaryButton: {
    backgroundColor: Colors.background.gray,
  },
  linkButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.secondary,
    textAlign: 'center',
  },
  defaultText: {
    color: Colors.text.primary,
  },
  outlineText: {
    color: Colors.text.primary,
  },
  destructiveText: {
    color: Colors.text.primary,
  },
  secondaryText: {
    color: Colors.text.primary,
  },
  linkText: {
    color: Colors.brand.primary,
    textDecorationLine: 'underline',
  },
  childrenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
});
