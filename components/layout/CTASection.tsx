import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onPressAction: () => void;
  style?: ViewStyle;
}

export function CTASection({
  title,
  subtitle,
  buttonText = 'Contact Us',
  onPressAction,
  style
}: CTASectionProps) {
  return (
    <View style={[styles.ctaSection, style]}>
      <View style={styles.ctaCard}>
        <Text style={styles.ctaTitle}>{title}</Text>
        <Text style={styles.ctaSubtitle}>{subtitle}</Text>
        <PrimaryButton onPress={onPressAction}>{buttonText}</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ctaSection: {
    paddingVertical: Spacing.xl * 5,
    paddingHorizontal: Spacing.lg,
  },
  ctaCard: {
    maxWidth: 1200,
    alignSelf: 'center',
    backgroundColor: 'rgba(234, 35, 32, 0.2)',
    borderColor: 'rgba(234, 35, 32, 0.3)',
    borderWidth: 1,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl * 3,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: Typography['2xl'] * 1.2,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    marginBottom: Spacing.xl * 2,
    textAlign: 'center',
    maxWidth: 672,
  },
});
