import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { GiantCard } from 'components/layout/GiantCard';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

interface OurMissionSectionProps {
  title: string;
  paragraphs: string[];
  style?: ViewStyle;
}

export function OurMissionSection({ title, paragraphs, style }: OurMissionSectionProps) {
  return (
    <View style={[styles.missionSection, style]}>
      <View style={styles.missionContent}>
        <View style={styles.sectionInner}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>

          <GiantCard
            values={paragraphs}
            cardStyle={styles.missionCard}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  missionSection: {
    paddingVertical: Spacing.xl * 5,
    position: 'relative',
  },
  missionContent: {
    zIndex: 10,
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
  missionCard: {
    backgroundColor: 'rgba(234, 35, 32, 0.1)',
    borderColor: 'rgba(234, 35, 32, 0.3)',
    borderWidth: 1,
  },
});
