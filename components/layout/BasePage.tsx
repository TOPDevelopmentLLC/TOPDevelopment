import { Footer } from 'components/layout/Footer';
import { Navigation } from 'components/navigation/Navigation';
import { CircuitBackground } from 'components/layout/CircuitBackground';
import { Colors } from 'constants/theme';
import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, ViewStyle, View } from 'react-native';

interface BasePageProps {
  children: ReactNode;
  style?: ViewStyle;
}

export function BasePage({ children, style }: BasePageProps) {
  return (
    <>
      <Navigation />
      <ScrollView style={[styles.container, style]}>
        <View style={styles.contentWrapper}>
          <CircuitBackground />
          {children}
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.dark,
  },
  contentWrapper: {
    position: 'relative',
    minHeight: '100vh' as any,
  },
});
