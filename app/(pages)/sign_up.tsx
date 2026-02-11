import axios from 'axios';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { Input } from 'components/forms/input';
import { Label } from 'components/forms/label';
import { BasePage } from 'components/layout/BasePage';
import { Card, CardContent } from 'components/layout/card';
import { HeroSection } from 'components/layout/HeroSection';
import { Typography } from 'constants/globalStyles';
import { Colors, FontFamily, Spacing } from 'constants/theme';
import { router } from 'expo-router';
import { useAuth } from 'lib/context/AuthContext';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { toast } from 'sonner';

const SignUp = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (formData.email.length === 0) {
      toast.error('Please enter your email');
      return;
    }
    if (formData.password.length === 0) {
      toast.error('Please enter a password');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        'https://api.thatoneprogrammer.dev/api/v1/auth/register',
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );

      if (response.status === 200 || response.status === 201) {
        login(response.data.token, response.data.email, response.data.role);
        toast.success('Account created successfully!');
        router.push('/dashboard' as any);
      }
    } catch (error: any) {
      let errorMessage = 'Failed to create account';

      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request Timeout - Please Try Again';
      } else if (error.response) {
        if (error.response.status === 409) {
          errorMessage = 'An account with this email already exists';
        } else {
          errorMessage = `Registration Failed: ${error.response.status}`;
        }
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        errorMessage = 'No Response from Server';
        console.error('No response received:', error.request);
      } else {
        errorMessage = `Error: ${error.message || 'Cannot Connect'}`;
      }

      toast.error(errorMessage);
      console.error('Request error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <BasePage>
      <HeroSection
        badge="Sign Up"
        title="Create Your Account"
        subtitle="Get started by creating a new account"
      />

      <View style={styles.formSection}>
        <View style={styles.formContainer}>
          <Card style={styles.formCard}>
            <CardContent style={styles.formCardContent}>
              <Text style={styles.formTitle}>Create a new account</Text>
              <View style={styles.form}>
                <View style={styles.formField}>
                  <Label style={styles.label}>Email</Label>
                  <Input
                    value={formData.email}
                    onChangeText={(value) => handleChange('email', value)}
                    placeholder="john@example.com"
                    type="email"
                    style={styles.input}
                  />
                </View>

                <View style={styles.formField}>
                  <Label style={styles.label}>Password</Label>
                  <Input
                    value={formData.password}
                    onChangeText={(value) => handleChange('password', value)}
                    placeholder="Enter your password"
                    type="password"
                    style={styles.input}
                  />
                </View>

                <View style={styles.formField}>
                  <Label style={styles.label}>Confirm Password</Label>
                  <Input
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleChange('confirmPassword', value)}
                    placeholder="Confirm your password"
                    type="password"
                    style={styles.input}
                  />
                </View>

                <PrimaryButton
                  onPress={handleSubmit}
                  style={styles.submitButton}
                >
                  {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                </PrimaryButton>

                <View style={styles.linkContainer}>
                  <Text style={styles.linkText}>
                    Already have an account?{' '}
                  </Text>
                  <Pressable onPress={() => router.push('/login' as any)}>
                    <Text style={styles.link}>Log in instead</Text>
                  </Pressable>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  formSection: {
    paddingVertical: Spacing.xl * 2,
  },
  formContainer: {
    width: '100%',
    maxWidth: 500,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
  },
  formCardContent: {
    padding: Spacing.xl * 2,
  },
  formTitle: {
    fontSize: Typography['2xl'],
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.lg,
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
  linkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  link: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.brand.primary,
    textDecorationLine: 'underline',
  },
});

export default SignUp;
