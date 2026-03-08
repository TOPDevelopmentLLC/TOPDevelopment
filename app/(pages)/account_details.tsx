import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { Redirect } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spacing } from 'constants/theme';

const AccountDetails = () => {
  const { isAuthenticated, email } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <BasePage>
      <HeroSection
        badge="Account"
        title="Account Details"
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
    maxWidth: 500,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
    gap: Spacing.xl,
  },
});

export default AccountDetails;
