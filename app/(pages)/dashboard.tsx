import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { BasePage } from 'components/layout/BasePage';
import { Card, CardContent } from 'components/layout/card';
import { HeroSection } from 'components/layout/HeroSection';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { Redirect } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dashboard = () => {
  const { email, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <BasePage>
      <HeroSection
        badge="Dashboard"
        title="Welcome Back"
        subtitle={`Signed in as ${email}`}
      />

      <View style={styles.contentSection}>
        <View style={styles.contentContainer}>
          <Card style={styles.infoCard}>
            <CardContent style={styles.infoCardContent}>
              <Text style={styles.cardTitle}>Account Information</Text>

              <View style={styles.infoRow}>
                <IconContainer
                  iconProps={{ name: 'email', size: 24, color: Colors.brand.primary, type: IconType.MaterialIcons }}
                />
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Email</Text>
                  <Text style={styles.infoValue}>{email}</Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <PrimaryButton onPress={logout} style={styles.logoutButton}>
            Log Out
          </PrimaryButton>
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
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
  },
  infoCardContent: {
    padding: Spacing.xl * 2,
    gap: Spacing.xl,
  },
  cardTitle: {
    fontSize: Typography['2xl'],
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  infoValue: {
    fontSize: Typography.lg,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  logoutButton: {
    width: '100%',
  },
});

export default Dashboard;
