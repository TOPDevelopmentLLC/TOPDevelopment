import React, { createContext, useContext, useState } from 'react';
import { View, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Colors, BorderRadius, Spacing } from 'constants/theme';

type ToggleGroupType = 'single' | 'multiple';
type ToggleGroupVariant = 'default' | 'outline';
type ToggleGroupSize = 'default' | 'sm' | 'lg';

interface ToggleGroupContextType {
  value: string | string[];
  onValueChange: (value: string) => void;
  type: ToggleGroupType;
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
}

const ToggleGroupContext = createContext<ToggleGroupContextType>({
  value: '',
  onValueChange: () => {},
  type: 'single',
  variant: 'default',
  size: 'default',
});

interface ToggleGroupProps {
  children?: React.ReactNode;
  type?: ToggleGroupType;
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  defaultValue?: string | string[];
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  disabled?: boolean;
  style?: ViewStyle;
  className?: string;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  children,
  type = 'single',
  value: controlledValue,
  onValueChange,
  defaultValue = type === 'single' ? '' : [],
  variant = 'default',
  size = 'default',
  disabled = false,
  style,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = (itemValue: string) => {
    if (disabled) return;

    let newValue: string | string[];

    if (type === 'single') {
      newValue = value === itemValue ? '' : itemValue;
    } else {
      const currentArray = Array.isArray(value) ? value : [];
      newValue = currentArray.includes(itemValue)
        ? currentArray.filter(v => v !== itemValue)
        : [...currentArray, itemValue];
    }

    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <ToggleGroupContext.Provider value={{ value, onValueChange: handleValueChange, type, variant, size }}>
      <View style={[styles.toggleGroup, variant === 'outline' && styles.outlineGroup, style]}>
        {children}
      </View>
    </ToggleGroupContext.Provider>
  );
};

interface ToggleGroupItemProps {
  children?: React.ReactNode;
  value: string;
  disabled?: boolean;
  style?: ViewStyle;
  className?: string;
}

export const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({
  children,
  value: itemValue,
  disabled = false,
  style,
}) => {
  const context = useContext(ToggleGroupContext);
  const { value, onValueChange, type, variant, size } = context;

  const isPressed = type === 'single'
    ? value === itemValue
    : Array.isArray(value) && value.includes(itemValue);

  const getSizeStyle = (): ViewStyle => {
    switch (size) {
      case 'sm':
        return styles.smSize;
      case 'lg':
        return styles.lgSize;
      default:
        return styles.defaultSize;
    }
  };

  const getVariantStyle = (): ViewStyle => {
    if (variant === 'outline') {
      return isPressed ? styles.outlinePressed : styles.outlineItem;
    }
    return isPressed ? styles.defaultPressed : styles.defaultItem;
  };

  return (
    <Pressable
      onPress={() => onValueChange(itemValue)}
      disabled={disabled}
      style={({ pressed }) => [
        styles.item,
        getSizeStyle(),
        getVariantStyle(),
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
  toggleGroup: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  outlineGroup: {
    // Outer shadow/border for outline variant
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: Spacing.sm,
    borderRightWidth: 0,
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
  defaultItem: {
    backgroundColor: 'transparent',
  },
  defaultPressed: {
    backgroundColor: Colors.background.gray,
  },
  outlineItem: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderLeftWidth: 0,
  },
  outlinePressed: {
    backgroundColor: Colors.background.gray,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderLeftWidth: 0,
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
