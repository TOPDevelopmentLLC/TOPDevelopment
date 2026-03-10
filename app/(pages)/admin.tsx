import axios from 'axios';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { Input } from 'components/forms/input';
import { Label } from 'components/forms/label';
import { BasePage } from 'components/layout/BasePage';
import { Card, CardContent } from 'components/layout/card';
import { HeroSection } from 'components/layout/HeroSection';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { Redirect } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { toast } from 'sonner';

const Admin = () => {
  const { email, isAuthenticated } = useAuth();
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  const handleAddUser = async () => {
    if (newEmail.length === 0) {
      toast.error('Please enter an email');
      return;
    }
    if (!newEmail.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }
    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(
        'https://api.thatoneprogrammer.dev/api/v1/auth/register',
        { email: newEmail, password: newPassword },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000,
        }
      );
      toast.success('User created successfully!');
      setNewEmail('');
      setNewPassword('');
    } catch (error: any) {
      let errorMessage = 'Failed to create user';
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request Timeout - Please Try Again';
      } else if (error.response) {
        if (error.response.status === 409) {
          errorMessage = 'A user with this email already exists';
        } else {
          errorMessage = `Error: ${error.response.status}`;
        }
      }
      toast.error(errorMessage);
      console.error('User creation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BasePage>
      <HeroSection
        badge="Admin"
        title="Admin Panel"
        subtitle={`Signed in as ${email}`}
      />

      <View style={styles.contentSection}>
        <View style={styles.contentContainer}>
          <Card style={styles.card}>
            <CardContent style={styles.cardContent}>
              <Text style={styles.cardTitle}>Add New User</Text>
              <View style={styles.form}>
                <View style={styles.formField}>
                  <Label style={styles.label}>Email</Label>
                  <Input
                    value={newEmail}
                    onChangeText={setNewEmail}
                    placeholder="user@example.com"
                    type="email"
                    style={styles.input}
                  />
                </View>

                <View style={styles.formField}>
                  <Label style={styles.label}>Password</Label>
                  <Input
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder="Minimum 8 characters"
                    type="password"
                    style={styles.input}
                  />
                </View>

                <PrimaryButton onPress={handleAddUser} style={styles.submitButton}>
                  {isSubmitting ? 'Creating User...' : 'Add New User'}
                </PrimaryButton>
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
    maxWidth: 500,
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
  form: {
    gap: Spacing.lg,
  },
  formField: {
    gap: Spacing.sm,
  },
  label: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    color: Colors.text.primary,
  },
  submitButton: {
    width: '100%',
  },
});

export default Admin;
