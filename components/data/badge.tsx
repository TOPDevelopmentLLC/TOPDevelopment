import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, BorderRadius, Spacing, FontFamily, FontSize } from 'constants/theme';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
  className?: string; // Keep for compatibility
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  style,
  textStyle,
}) => {
  const getBadgeStyle = (): ViewStyle => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryBadge;
      case 'destructive':
        return styles.destructiveBadge;
      case 'outline':
        return styles.outlineBadge;
      default:
        return styles.defaultBadge;
    }
  };

  const getTextStyle = (): TextStyle => {
    switch (variant) {
      case 'outline':
        return styles.outlineText;
      default:
        return styles.defaultText;
    }
  };

  return (
    <View style={[styles.badge, getBadgeStyle(), style]}>
      <Text style={[styles.text, getTextStyle(), textStyle]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  defaultBadge: {
    backgroundColor: Colors.brand.primary,
  },
  secondaryBadge: {
    backgroundColor: Colors.background.gray,
  },
  destructiveBadge: {
    backgroundColor: '#dc2626',
  },
  outlineBadge: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  text: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.secondary,
  },
  defaultText: {
    color: Colors.text.primary,
  },
  outlineText: {
    color: Colors.text.primary,
  },
});
