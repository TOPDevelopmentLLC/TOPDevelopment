import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import { Card, CardContent } from 'components/layout/card';

interface GiantCardProps {
  values: string[];
  cardStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

export function GiantCard({ values, cardStyle, contentStyle }: GiantCardProps) {
  return (
    <Card style={[styles.card, cardStyle]}>
      <CardContent style={[styles.content, contentStyle]}>
        {values.map((value, index) => (
          <Text
            key={index}
            style={[
              styles.text,
              index === values.length - 1 && { marginBottom: 0 }
            ]}
          >
            {value}
          </Text>
        ))}
      </CardContent>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
  },
  content: {
    padding: Spacing.xl * 3,
  },
  text: {
    fontSize: Typography.lg,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    lineHeight: Typography.lg * 1.6,
    marginBottom: Spacing.lg,
  },
});
