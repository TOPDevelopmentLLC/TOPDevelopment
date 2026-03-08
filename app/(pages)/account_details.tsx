import axios from 'axios';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { BasePage } from 'components/layout/BasePage';
import { Card, CardContent } from 'components/layout/card';
import { HeroSection } from 'components/layout/HeroSection';
import IconContainer, { IconType } from 'components/utils/IconContainer';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { Redirect } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { toast } from 'sonner';

const AccountDetails = () => {
  const { email, token, wwApiToken, isAuthenticated, setWwApiToken } = useAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  const [showToken, setShowToken] = useState(false);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  const handleGenerateWwToken = async () => {
    setIsGenerating(true);
    try {
      const response = await axios.post(
        'https://api.thatoneprogrammer.dev/api/v1/admin/create-ww-api-token',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          timeout: 10000,
        }
      );
      setWwApiToken(response.data.wwApiToken);
      toast.success('Word Wolf API token generated!');
    } catch (error: any) {
      let errorMessage = 'Failed to generate token';
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request Timeout - Please Try Again';
      } else if (error.response) {
        errorMessage = `Error: ${error.response.status}`;
      }
      toast.error(errorMessage);
      console.error('Token generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToken = async () => {
    if (!wwApiToken) return;
    try {
      if (Platform.OS === 'web' && typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(wwApiToken);
        toast.success('Token copied to clipboard!');
      }
    } catch {
      toast.error('Failed to copy token');
    }
  };

  const maskedToken = wwApiToken ? '•'.repeat(wwApiToken.length) : '';

  return (
    <BasePage>
      <HeroSection
        badge="Account"
        title="Account Details"
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

          <Card style={styles.infoCard}>
            <CardContent style={styles.infoCardContent}>
              <Text style={styles.cardTitle}>Integrations</Text>

              <View style={styles.integrationRow}>
                <View style={styles.integrationInfo}>
                  <Text style={styles.integrationSubtitle}>Word Wolf</Text>
                  <Text style={styles.integrationDescription}>
                    Generate an API token to connect your TOP Development account with Word Wolf. Copy the token and paste it into your Word Wolf account integrations.
                  </Text>
                </View>

                {wwApiToken ? (
                  <View style={styles.tokenSection}>
                    <View style={styles.tokenContainer}>
                      <Text style={styles.tokenText} numberOfLines={1}>
                        {showToken ? wwApiToken : maskedToken}
                      </Text>
                      <Pressable onPress={() => setShowToken(!showToken)}>
                        <IconContainer
                          iconProps={{
                            name: showToken ? 'visibility-off' : 'visibility',
                            size: 20,
                            color: Colors.text.secondary,
                            type: IconType.MaterialIcons,
                          }}
                        />
                      </Pressable>
                      <Pressable onPress={handleCopyToken}>
                        <IconContainer
                          iconProps={{ name: 'content-copy', size: 20, color: Colors.brand.primary, type: IconType.MaterialIcons }}
                        />
                      </Pressable>
                    </View>
                  </View>
                ) : (
                  <PrimaryButton onPress={handleGenerateWwToken} style={styles.generateButton}>
                    {isGenerating ? 'Generating...' : 'Generate Token'}
                  </PrimaryButton>
                )}
              </View>
            </CardContent>
          </Card>
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
    textAlign: 'center',
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
  integrationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xl,
  },
  integrationInfo: {
    flex: 1,
    gap: Spacing.xs,
  },
  integrationSubtitle: {
    fontSize: Typography.lg,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  integrationDescription: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  tokenSection: {
    gap: Spacing.sm,
  },
  tokenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  tokenText: {
    fontSize: Typography.sm,
    fontFamily: 'monospace',
    color: Colors.text.primary,
    minWidth: 200,
  },
  generateButton: {},
});

export default AccountDetails;
