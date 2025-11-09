import React, { useState } from 'react';
import { Pressable, StyleSheet, ViewStyle, View } from 'react-native';
import { Colors, BorderRadius, Spacing } from '../../constants/theme';

interface ToggleProps {
  children?: React.ReactNode;
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  defaultPressed?: boolean;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  disabled?: boolean;
  style?: ViewStyle;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  children,
  pressed: controlledPressed,
  onPressedChange,
  defaultPressed = false,
  variant = 'default',
  size = 'default',
  disabled = false,
  style,
}) => {
  const [internalPressed, setInternalPressed] = useState(defaultPressed);
  const isPressed = controlledPressed !== undefined ? controlledPressed : internalPressed;

  const handlePress = () => {
    const newPressed = !isPressed;
    if (controlledPressed === undefined) {
      setInternalPressed(newPressed);
    }
    onPressedChange?.(newPressed);
  };

  const getToggleStyle = (): ViewStyle => {
    const baseStyle = styles[`${size}Size`] || styles.defaultSize;
    const variantStyle = variant === 'outline' ? styles.outline : styles.default;
    const pressedStyle = isPressed ? styles.pressed : {};

    return { ...baseStyle, ...variantStyle, ...pressedStyle };
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.toggle,
        getToggleStyle(),
        pressed && styles.pressing,
        disabled && styles.disabled,
        style,
      ]}
    >
      <View style={styles.content}>
        {children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  default: {
    backgroundColor: 'transparent',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  defaultSize: {
    minHeight: 36,
    minWidth: 36,
    paddingHorizontal: Spacing.sm,
  },
  smSize: {
    minHeight: 32,
    minWidth: 32,
    paddingHorizontal: Spacing.xs,
  },
  lgSize: {
    minHeight: 40,
    minWidth: 40,
    paddingHorizontal: Spacing.md,
  },
  pressed: {
    backgroundColor: Colors.background.gray,
  },
  pressing: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
});

// Export variants for toggle-group to use
export const toggleVariants = {
  variant: {
    default: 'default' as const,
    outline: 'outline' as const,
  },
  size: {
    default: 'default' as const,
    sm: 'sm' as const,
    lg: 'lg' as const,
  },
};
