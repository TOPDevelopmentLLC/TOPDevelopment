import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { GiantCard } from 'components/layout/GiantCard';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

interface OurStorySectionProps {
  title: string;
  paragraphs: string[];
  style?: ViewStyle;
}

export function OurStorySection({ title, paragraphs, style }: OurStorySectionProps) {
  return (
    <View style={[styles.section, style]}>
      <View style={styles.sectionInner}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>

        <GiantCard values={paragraphs} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: Spacing.xl * 3,
  },
  sectionInner: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: Spacing.xl * 3,
  },
  sectionTitle: {
    fontSize: Typography['2xl'] * 1.2,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
});
