import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CircuitBackground } from 'components/layout/CircuitBackground';
import { BasePage } from 'components/layout/BasePage';
import { Button } from 'components/buttons/button';
import { Card, CardContent } from 'components/layout/card';
import { Badge } from 'components/data/badge';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

const HomePage = () => {
  const services = [
    {
      icon: 'public',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and AI-powered development',
    },
    {
      icon: 'smartphone',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences',
    },
    {
      icon: 'storage',
      title: 'Backend Development',
      description: 'Scalable backend solutions with robust APIs and database architecture',
    },
    {
      icon: 'search',
      title: 'SEO Services',
      description: 'Optimize your digital presence and increase visibility in search results',
    },
    {
      icon: 'memory',
      title: 'Infrastructure Modernization',
      description: 'Upgrade and optimize your existing infrastructure for better performance',
    },
    {
      icon: 'people',
      title: 'Consultation Services',
      description: 'Expert guidance to help you navigate your technology decisions',
    },
  ];

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
      <View style={styles.heroSection}>
        <CircuitBackground />
        <View style={styles.heroContent}>
          <View style={styles.heroInner}>
            <Badge style={styles.badge} textStyle={styles.badgeText}>
              Founded in 2025
            </Badge>
            <Text style={styles.heroTitle}>Redefining Software Development</Text>
            <Text style={styles.heroSubtitle}>
              Utilizing AI to create websites and mobile apps faster than our competitors,
              with seamless UI interfaces and comprehensive infrastructure support.
            </Text>
            <View style={styles.heroButtons}>
              <Button onPress={() => handleNavigate('contact')} style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Get Started</Text>
              </Button>
              <Button
                onPress={() => handleNavigate('services')}
                variant="outline"
                style={styles.secondaryButton}
              >
                <Text style={styles.secondaryButtonText}>Learn More</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <CircuitBackground />
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
                  <MaterialIcons name={service.icon as any} size={48} color={Colors.brand.primary} style={styles.serviceIcon} />
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
          <Button onPress={() => handleNavigate('contact')} style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Contact Us Today</Text>
          </Button>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    minHeight: '90vh' as any,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    zIndex: 10,
  },
  heroInner: {
    maxWidth: 896,
    alignItems: 'center',
    gap: Spacing.lg,
  },
  badge: {
    backgroundColor: 'rgba(234, 35, 32, 0.1)',
    borderColor: 'rgba(234, 35, 32, 0.3)',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
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
  },
  heroSubtitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
    maxWidth: 672,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: Spacing.lg,
    marginTop: Spacing.xl,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.brand.primary,
    paddingHorizontal: Spacing.xl * 2,
    paddingVertical: Spacing.lg * 1.5,
  },
  primaryButtonText: {
    color: Colors.text.primary,
    fontSize: Typography.lg,
    fontFamily: FontFamily.secondary,
    fontWeight: '500',
  },
  secondaryButton: {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: Spacing.xl * 2,
    paddingVertical: Spacing.lg * 1.5,
  },
  secondaryButtonText: {
    color: Colors.text.primary,
    fontSize: Typography.lg,
    fontFamily: FontFamily.secondary,
    fontWeight: '500',
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
  ctaButton: {
    backgroundColor: Colors.brand.primary,
    paddingHorizontal: Spacing.xl * 2,
    paddingVertical: Spacing.lg * 1.5,
  },
  ctaButtonText: {
    color: Colors.text.primary,
    fontSize: Typography.lg,
    fontFamily: FontFamily.secondary,
    fontWeight: '500',
  },
});

export default HomePage;
