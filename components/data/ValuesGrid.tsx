import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Card, CardContent } from 'components/layout/card';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface ValuesGridProps {
  values: ValueItem[];
  style?: ViewStyle;
}

export function ValuesGrid({ values, style }: ValuesGridProps) {
  return (
    <View style={[styles.grid, style]}>
      {values.map((value, index) => (
        <Card key={index} style={styles.card}>
          <CardContent style={styles.cardContent}>
            <IconContainer
              iconProps={{
                name: value.icon,
                size: 48,
                color: Colors.brand.primary,
                type: IconType.MaterialIcons
              }}
              style={styles.icon}
            />
            <Text style={styles.title}>{value.title}</Text>
            <Text style={styles.description}>{value.description}</Text>
          </CardContent>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 280,
    minWidth: 200,
  },
  cardContent: {
    padding: Spacing.lg,
    alignItems: 'center',
  },
  icon: {
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  description: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
});
