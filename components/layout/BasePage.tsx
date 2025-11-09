import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { Footer } from 'components/layout/Footer';
import { Colors } from 'constants/theme';

interface BasePageProps {
  children: ReactNode;
  style?: ViewStyle;
}

export function BasePage({ children, style }: BasePageProps) {
  return (
    <ScrollView style={[styles.container, style]}>
      {children}
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.dark,
  },
});
