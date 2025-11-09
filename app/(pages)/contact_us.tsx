import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Linking } from 'react-native';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import { toast } from 'sonner';
import { CircuitBackground } from '../../components/layout/CircuitBackground';
import { Badge } from '../../components/data/badge';
import { Button } from '../../components/buttons/button';
import { Card, CardContent } from '../../components/layout/card';
import { Input } from '../../components/forms/input';
import { Label } from '../../components/forms/label';
import { Textarea } from '../../components/forms/textarea';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from '../../constants/theme';
import { Typography } from '../../constants/globalStyles';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNavigate = (page: string) => {
    const pageMap: { [key: string]: string } = {
      contact: '/contact_us',
      services: '/services',
      about: '/about_us',
      pricing: '/pricing',
      faq: '/faq',
    };

    const route = pageMap[page];
    if (route) {
      router.push(route as any);
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (formData.name.length === 0) {
      toast.error('Insert Valid Name');
      return;
    }
    if (formData.email.length === 0) {
      toast.error('Insert Valid Email');
      return;
    }
    if (formData.message.length === 0) {
      toast.error('Insert a Message to Send');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        'https://api.thatoneprogrammer.dev/api/v1/email/send',
        {
          to: formData.email,
          textBody: formData.message,
          customerName: formData.name,
          customerPhone: formData.phone,
          customerCompany: formData.company,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'ThatOneProgrammerDevelopment.AppAPIKey',
          },
          timeout: 10000, // 10 second timeout
        }
      );

      if (response.status === 200 || response.status === 202) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        });

        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      }
    } catch (error: any) {
      let errorMessage = 'Failed to send message';

      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request Timeout - Please Try Again';
      } else if (error.response) {
        errorMessage = `Failed to Send Email: ${error.response.status}`;
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
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <CircuitBackground />
        <View style={styles.heroContent}>
          <Badge style={styles.badge} textStyle={styles.badgeText}>
            Contact Us
          </Badge>
          <Text style={styles.heroTitle}>Let's Start a Conversation</Text>
          <Text style={styles.heroSubtitle}>
            Ready to bring your project to life? Get in touch and let's discuss how we can help.
          </Text>
        </View>
      </View>

      {/* Contact Form & Info */}
      <View style={styles.formSection}>
        <View style={styles.formContainer}>
          <View style={styles.contentGrid}>
            {/* Contact Info */}
            <View style={styles.contactInfoColumn}>
              <Card style={styles.infoCard}>
                <CardContent style={styles.infoCardContent}>
                  <MaterialIcons name="email" size={32} color={Colors.brand.primary} style={styles.infoIcon} />
                  <Text style={styles.infoTitle}>Email</Text>
                  <Pressable onPress={() => Linking.openURL('mailto:contact@topdevelopment.com')}>
                    <Text style={styles.infoLink}>contact@topdevelopment.com</Text>
                  </Pressable>
                </CardContent>
              </Card>

              <Card style={styles.infoCard}>
                <CardContent style={styles.infoCardContent}>
                  <MaterialIcons name="phone" size={32} color={Colors.brand.primary} style={styles.infoIcon} />
                  <Text style={styles.infoTitle}>Phone</Text>
                  <Pressable onPress={() => Linking.openURL('tel:+1234567890')}>
                    <Text style={styles.infoLink}>+1 (234) 567-890</Text>
                  </Pressable>
                </CardContent>
              </Card>

              <Card style={styles.infoCard}>
                <CardContent style={styles.infoCardContent}>
                  <MaterialIcons name="place" size={32} color={Colors.brand.primary} style={styles.infoIcon} />
                  <Text style={styles.infoTitle}>Location</Text>
                  <Text style={styles.infoText}>Florida, United States</Text>
                </CardContent>
              </Card>

              <Card style={styles.expectCard}>
                <CardContent style={styles.expectCardContent}>
                  <Text style={styles.expectTitle}>What to Expect</Text>
                  <View style={styles.expectList}>
                    <View style={styles.expectItem}>
                      <MaterialIcons name="check-circle" size={16} color={Colors.brand.primary} style={styles.expectIcon} />
                      <Text style={styles.expectText}>Response within 24 hours</Text>
                    </View>
                    <View style={styles.expectItem}>
                      <MaterialIcons name="check-circle" size={16} color={Colors.brand.primary} style={styles.expectIcon} />
                      <Text style={styles.expectText}>Free consultation call</Text>
                    </View>
                    <View style={styles.expectItem}>
                      <MaterialIcons name="check-circle" size={16} color={Colors.brand.primary} style={styles.expectIcon} />
                      <Text style={styles.expectText}>Detailed proposal & timeline</Text>
                    </View>
                    <View style={styles.expectItem}>
                      <MaterialIcons name="check-circle" size={16} color={Colors.brand.primary} style={styles.expectIcon} />
                      <Text style={styles.expectText}>No obligation to proceed</Text>
                    </View>
                  </View>
                </CardContent>
              </Card>
            </View>

            {/* Contact Form */}
            <View style={styles.formColumn}>
              <Card style={styles.formCard}>
                <CardContent style={styles.formCardContent}>
                  <Text style={styles.formTitle}>Send us a message</Text>
                  <View style={styles.form}>
                    <View style={styles.formRow}>
                      <View style={styles.formField}>
                        <Label style={styles.label}>Name *</Label>
                        <Input
                          value={formData.name}
                          onChangeText={(value) => handleChange('name', value)}
                          placeholder="John Doe"
                          style={styles.input}
                        />
                      </View>

                      <View style={styles.formField}>
                        <Label style={styles.label}>Email *</Label>
                        <Input
                          value={formData.email}
                          onChangeText={(value) => handleChange('email', value)}
                          placeholder="john@example.com"
                          type="email"
                          style={styles.input}
                        />
                      </View>
                    </View>

                    <View style={styles.formRow}>
                      <View style={styles.formField}>
                        <Label style={styles.label}>Phone Number</Label>
                        <Input
                          value={formData.phone}
                          onChangeText={(value) => handleChange('phone', value)}
                          placeholder="+1 (234) 567-890"
                          type="tel"
                          style={styles.input}
                        />
                      </View>

                      <View style={styles.formField}>
                        <Label style={styles.label}>Company</Label>
                        <Input
                          value={formData.company}
                          onChangeText={(value) => handleChange('company', value)}
                          placeholder="Your Company"
                          style={styles.input}
                        />
                      </View>
                    </View>

                    <View style={styles.formFieldFull}>
                      <Label style={styles.label}>Message *</Label>
                      <Textarea
                        value={formData.message}
                        onChangeText={(value) => handleChange('message', value)}
                        placeholder="Tell us about your project..."
                        rows={6}
                        style={styles.textarea}
                      />
                    </View>

                    <View style={styles.privacyText}>
                      <Text style={styles.privacyTextContent}>
                        By submitting this form, you agree to our{' '}
                      </Text>
                      <Pressable onPress={() => handleNavigate('contact')}>
                        <Text style={styles.privacyLink}>Privacy Policy</Text>
                      </Pressable>
                    </View>

                    <Button
                      onPress={handleSubmit}
                      disabled={isSubmitting}
                      style={styles.submitButton}
                    >
                      <Text style={styles.submitButtonText}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Text>
                    </Button>
                  </View>
                </CardContent>
              </Card>
            </View>
          </View>
        </View>
      </View>

      {/* Additional CTA */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaContainer}>
          <View style={styles.ctaContent}>
            <Text style={styles.ctaTitle}>Prefer to explore first?</Text>
            <Text style={styles.ctaSubtitle}>
              Check out our services and pricing to learn more about what we offer
            </Text>
            <View style={styles.ctaButtons}>
              <Button
                onPress={() => handleNavigate('services')}
                variant="outline"
                style={styles.ctaButton}
              >
                <Text style={styles.ctaButtonText}>View Services</Text>
              </Button>
              <Button
                onPress={() => handleNavigate('pricing')}
                variant="outline"
                style={styles.ctaButton}
              >
                <Text style={styles.ctaButtonText}>See Pricing</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.dark,
  },
  heroSection: {
    paddingVertical: Spacing.xl * 5,
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    zIndex: 10,
    alignSelf: 'center',
  },
  badge: {
    backgroundColor: 'rgba(234, 35, 32, 0.1)',
    borderColor: 'rgba(234, 35, 32, 0.3)',
    borderWidth: 1,
    marginBottom: Spacing.md,
  },
  badgeText: {
    color: Colors.brand.primary,
  },
  heroTitle: {
    fontSize: Typography['2xl'] * 2,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  heroSubtitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 672,
  },
  formSection: {
    paddingVertical: Spacing.xl * 3,
  },
  formContainer: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  contentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xl * 2,
  },
  contactInfoColumn: {
    flex: 1,
    minWidth: 280,
    maxWidth: 350,
    gap: Spacing.lg,
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
  },
  infoCardContent: {
    padding: Spacing.lg,
  },
  infoIcon: {
    marginBottom: Spacing.md,
  },
  infoTitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
  },
  infoLink: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  infoText: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  expectCard: {
    backgroundColor: 'rgba(234, 35, 32, 0.1)',
    borderColor: 'rgba(234, 35, 32, 0.3)',
    borderWidth: 1,
  },
  expectCardContent: {
    padding: Spacing.lg,
  },
  expectTitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.md,
  },
  expectList: {
    gap: Spacing.sm * 1.5,
  },
  expectItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
  },
  expectIcon: {
    flexShrink: 0,
    marginTop: 2,
  },
  expectText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    flex: 1,
  },
  formColumn: {
    flex: 2,
    minWidth: 320,
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
  formRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
  },
  formField: {
    flex: 1,
    minWidth: 200,
    gap: Spacing.sm,
  },
  formFieldFull: {
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
  textarea: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    color: Colors.text.primary,
  },
  privacyText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  privacyTextContent: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  privacyLink: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.brand.primary,
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: Colors.brand.primary,
    width: '100%',
    paddingVertical: Spacing.lg * 1.5,
  },
  submitButtonText: {
    color: Colors.text.primary,
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    fontWeight: '500',
  },
  ctaSection: {
    paddingVertical: Spacing.xl * 5,
  },
  ctaContainer: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  ctaContent: {
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: Typography['2xl'] * 1.2,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    marginBottom: Spacing.xl * 2,
    textAlign: 'center',
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: Spacing.lg,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ctaButton: {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: Spacing.xl * 2,
    paddingVertical: Spacing.lg * 1.5,
  },
  ctaButtonText: {
    color: Colors.text.primary,
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    fontWeight: '500',
  },
});

export default ContactUs;
