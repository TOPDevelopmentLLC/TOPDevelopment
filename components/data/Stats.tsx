import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

export interface StatItem {
  number: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
  style?: ViewStyle;
}

export function Stats({ stats, style }: StatsProps) {
  return (
    <View style={[styles.statsSection, style]}>
      <View style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statNumber}>{stat.number}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statsSection: {
    paddingVertical: Spacing.xl * 5,
    paddingHorizontal: Spacing.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  statItem: {
    alignItems: 'center',
    minWidth: 120,
  },
  statNumber: {
    fontSize: Typography['2xl'] * 1.6,
    fontFamily: FontFamily.primary,
    color: Colors.brand.primary,
    fontWeight: 'bold',
    marginBottom: Spacing.sm,
  },
  statLabel: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
});
