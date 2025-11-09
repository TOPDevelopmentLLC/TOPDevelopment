import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { SecondaryButton } from 'components/buttons/SecondaryButton';
import { Card, CardContent } from 'components/layout/card';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import { services } from 'lib/data/home';
import IconContainer, { IconType } from 'components/utils/IconContainer';

const HomePage = () => {
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

  return (
    <BasePage>
      {/* Hero Section */}
      <HeroSection
        badge="Founded in 2025"
        title="Redefining Software Development"
        subtitle="Utilizing AI to create websites and mobile apps faster than our competitors, with seamless UI interfaces and comprehensive infrastructure support."
      >
        <View style={styles.heroButtons}>
          <PrimaryButton onPress={() => handleNavigate('contact')}>
            Get Started
          </PrimaryButton>
          <SecondaryButton onPress={() => handleNavigate('services')}>
            Learn More
          </SecondaryButton>
        </View>
      </HeroSection>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <View style={styles.servicesSectionContent}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <Text style={styles.sectionSubtitle}>
              Comprehensive software development solutions to bring your vision to life
            </Text>
          </View>

          <View style={styles.servicesGrid}>
            {services.map((service, index) => (
              <Card key={index} style={styles.serviceCard} onPress={() => handleNavigate('services')}>
                <CardContent style={styles.serviceCardContent}>
                  <IconContainer iconProps={{ name: service.icon, size: 48, color: Colors.brand.primary, type: IconType.MaterialIcons }} style={styles.serviceIcon} />
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <Text style={styles.serviceDescription}>{service.description}</Text>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Ready to Transform Your Business?</Text>
          <Text style={styles.ctaSubtitle}>
            Let's discuss how we can help you build solutions that make things easier
          </Text>
          <PrimaryButton onPress={() => handleNavigate('contact')}>
            Contact Us Today
          </PrimaryButton>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  heroButtons: {
    flexDirection: 'row',
    gap: Spacing.lg,
    marginTop: Spacing.xl,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  servicesSection: {
    paddingVertical: Spacing.xl * 5,
    position: 'relative',
  },
  servicesSectionContent: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    zIndex: 10,
    alignSelf: 'center',
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: Spacing.xl * 3,
  },
  sectionTitle: {
    fontSize: Typography['2xl'] * 1.5,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 672,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
  serviceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 350,
    minWidth: 280,
  },
  serviceCardContent: {
    padding: Spacing.lg,
  },
  serviceIcon: {
    marginBottom: Spacing.md,
  },
  serviceTitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
  },
  serviceDescription: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  ctaSection: {
    paddingVertical: Spacing.xl * 5,
    paddingHorizontal: Spacing.lg,
  },
  ctaCard: {
    maxWidth: 1200,
    alignSelf: 'center',
    backgroundColor: 'rgba(234, 35, 32, 0.2)',
    borderColor: 'rgba(234, 35, 32, 0.3)',
    borderWidth: 1,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl * 3,
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
    maxWidth: 672,
  },
});

export default HomePage;
