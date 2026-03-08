import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { BasePage } from 'components/layout/BasePage';
import { Card, CardContent } from 'components/layout/card';
import { HeroSection } from 'components/layout/HeroSection';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { Redirect, router } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

const Dashboard = () => {
  const { email, isAuthenticated, wwApiToken, topDevWebsiteUrl, logout } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  const firstName = email?.split('@')[0] ?? '';

  const checklistItems = [
    {
      label: 'Set your domain',
      completed: !!topDevWebsiteUrl,
      route: '/account_details',
    },
    {
      label: 'Generate Word Wolf API token',
      completed: !!wwApiToken,
      route: '/account_details',
    },
    {
      label: 'Explore the blog',
      completed: false,
      route: '/blog',
    },
  ];

  const completedCount = checklistItems.filter((item) => item.completed).length;

  return (
    <BasePage>
      <HeroSection
        badge="Dashboard"
        title={`${getGreeting()}, ${firstName}`}
        subtitle={`Signed in as ${email}`}
      />

      <View style={styles.contentSection}>
        <View style={styles.contentContainer}>
          {/* Getting Started Checklist */}
          <Card style={styles.card}>
            <CardContent style={styles.cardContent}>
              <Text style={styles.cardTitle}>Getting Started</Text>
              <Text style={styles.checklistProgress}>
                {completedCount} of {checklistItems.length} completed
              </Text>

              <View style={styles.progressBarContainer}>
                <View
                  style={[
                    styles.progressBarFill,
                    { width: `${(completedCount / checklistItems.length) * 100}%` as any },
                  ]}
                />
              </View>

              <View style={styles.checklistContainer}>
                {checklistItems.map((item) => (
                  <Pressable
                    key={item.label}
                    onPress={() => router.push(item.route as any)}
                    style={({ pressed }) => [
                      styles.checklistItem,
                      pressed && styles.checklistItemPressed,
                    ]}
                  >
                    <IconContainer
                      iconProps={{
                        name: item.completed ? 'check-circle' : 'radio-button-unchecked',
                        size: 22,
                        color: item.completed ? '#4CAF50' : Colors.text.secondary,
                        type: IconType.MaterialIcons,
                      }}
                    />
                    <Text
                      style={[
                        styles.checklistLabel,
                        item.completed && styles.checklistLabelCompleted,
                      ]}
                    >
                      {item.label}
                    </Text>
                    <IconContainer
                      iconProps={{
                        name: 'chevron-right',
                        size: 20,
                        color: Colors.text.secondary,
                        type: IconType.MaterialIcons,
                      }}
                    />
                  </Pressable>
                ))}
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
    maxWidth: 900,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
    gap: Spacing.xl,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
  },
  cardContent: {
    padding: Spacing.xl * 2,
    gap: Spacing.xl,
  },
  cardTitle: {
    fontSize: Typography['2xl'],
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    textAlign: 'center',
  },
  checklistProgress: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginTop: -Spacing.md,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  checklistContainer: {
    gap: Spacing.sm,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
  },
  checklistItemPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  checklistLabel: {
    flex: 1,
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
  },
  checklistLabelCompleted: {
    color: Colors.text.secondary,
    textDecorationLine: 'line-through',
  },
  logoutButton: {
    width: '100%',
  },
});

export default Dashboard;
