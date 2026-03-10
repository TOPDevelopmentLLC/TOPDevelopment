import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { Spacing } from 'constants/theme';
import { Redirect } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Admin = () => {
  const { email, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <BasePage>
      <HeroSection
        badge="Admin"
        title="Admin Panel"
        subtitle={`Signed in as ${email}`}
      />

      <View style={styles.contentSection}>
        <View style={styles.contentContainer}>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  contentSection: {
    paddingVertical: Spacing.xl * 2,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 900,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
    gap: Spacing.xl,
  },
});

export default Admin;
