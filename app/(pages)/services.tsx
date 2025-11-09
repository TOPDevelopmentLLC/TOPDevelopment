import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { SecondaryButton } from 'components/buttons/SecondaryButton';
import { Card, CardContent } from 'components/layout/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/navigation/tabs';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import { serviceCategories, serviceDetails } from 'lib/data/services';
import IconContainer, { IconType } from 'components/utils/IconContainer';

const Services = () => {
  const [activeTab, setActiveTab] = useState('web');

  const currentService = serviceDetails[activeTab as keyof typeof serviceDetails];

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
        badge="Services"
        title="Comprehensive Development Solutions"
        subtitle="From concept to deployment, we provide end-to-end software development services"
      />

      {/* Service Tabs */}
      <View style={styles.tabsSection}>
        <View style={styles.tabsContainer}>
          <Tabs value={activeTab} onValueChange={setActiveTab} style={styles.tabs}>
            <TabsList style={styles.tabsList}>
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  style={[
                    styles.tabTrigger,
                    activeTab === category.value && styles.tabTriggerActive
                  ] as any}
                >
                  <View style={styles.tabTriggerContent}>
                    <IconContainer iconProps={{ name: category.icon, size: 16, color: Colors.text.primary, type: IconType.MaterialIcons }} />
                    <Text style={styles.tabLabel}>{category.label}</Text>
                  </View>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(serviceDetails).map(([key, service]) => (
              <TabsContent key={key} value={key} style={styles.tabContent}>
                {/* Service Header */}
                <View style={styles.serviceHeader}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
                </View>

                {/* Features Grid */}
                <View style={styles.featuresSection}>
                  <Text style={styles.sectionTitle}>Key Features</Text>
                  <View style={styles.featuresGrid}>
                    {service.features.map((feature: string, index: number) => (
                      <Card key={index} style={styles.featureCard}>
                        <CardContent style={styles.featureCardContent}>
                          <IconContainer iconProps={{ name: "check-circle", size: 20, color: Colors.brand.primary, type: IconType.MaterialIcons }} />
                          <Text style={styles.featureText}>{feature}</Text>
                        </CardContent>
                      </Card>
                    ))}
                  </View>
                </View>

                {/* Use Cases */}
                <View style={styles.useCasesSection}>
                  <Text style={styles.sectionTitle}>Use Cases</Text>
                  <View style={styles.useCasesGrid}>
                    {service.useCases.map((useCase: { title: string; description: string }, index: number) => (
                      <Card key={index} style={styles.useCaseCard}>
                        <CardContent style={styles.useCaseCardContent}>
                          <Text style={styles.useCaseTitle}>{useCase.title}</Text>
                          <Text style={styles.useCaseDescription}>{useCase.description}</Text>
                        </CardContent>
                      </Card>
                    ))}
                  </View>
                </View>
              </TabsContent>
            ))}
          </Tabs>
        </View>
      </View>

      {/* Why Choose Us */}
      <View style={styles.whySection}>
        <View style={styles.whyContainer}>
          <Text style={styles.whyTitle}>Why Choose TOP Development</Text>
          <View style={styles.whyGrid}>
            <Card style={styles.whyCard}>
              <CardContent style={styles.whyCardContent}>
                <IconContainer iconProps={{ name: "flash-on", size: 48, color: Colors.brand.primary, type: IconType.MaterialIcons }} style={styles.whyIcon} />
                <Text style={styles.whyCardTitle}>AI-Powered Speed</Text>
                <Text style={styles.whyCardDescription}>
                  Leverage cutting-edge AI tools to build and deploy faster than traditional methods
                </Text>
              </CardContent>
            </Card>
            <Card style={styles.whyCard}>
              <CardContent style={styles.whyCardContent}>
                <IconContainer iconProps={{ name: "security", size: 48, color: Colors.brand.primary, type: IconType.MaterialIcons }} style={styles.whyIcon} />
                <Text style={styles.whyCardTitle}>Quality Assurance</Text>
                <Text style={styles.whyCardDescription}>
                  Rigorous testing and quality control ensure reliable, production-ready solutions
                </Text>
              </CardContent>
            </Card>
            <Card style={styles.whyCard}>
              <CardContent style={styles.whyCardContent}>
                <IconContainer iconProps={{ name: "trending-up", size: 48, color: Colors.brand.primary, type: IconType.MaterialIcons }} style={styles.whyIcon} />
                <Text style={styles.whyCardTitle}>Scalable Solutions</Text>
                <Text style={styles.whyCardDescription}>
                  Built to grow with your business, from startup to enterprise scale
                </Text>
              </CardContent>
            </Card>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Ready to Start Your Project?</Text>
          <Text style={styles.ctaSubtitle}>
            Get in touch to discuss your requirements and receive a detailed proposal
          </Text>
          <View style={styles.ctaButtons}>
            <PrimaryButton onPress={() => handleNavigate('contact')}>Contact Us</PrimaryButton>
            <SecondaryButton onPress={() => handleNavigate('pricing')}>View Pricing</SecondaryButton>
          </View>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  tabsSection: {
    paddingVertical: Spacing.xl * 3,
  },
  tabsContainer: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  tabs: {
    width: '100%',
  },
  tabsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginBottom: Spacing.xl * 3,
    justifyContent: 'center',
    paddingHorizontal: Spacing.md,
  },
  tabTrigger: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    paddingVertical: Spacing.sm * 1.5,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.sm,
  },
  tabTriggerActive: {
    backgroundColor: Colors.brand.primary,
    borderColor: Colors.brand.primary,
  },
  tabTriggerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  tabLabel: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
  },
  tabContent: {
    gap: Spacing.xl * 3,
  },
  serviceHeader: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  serviceTitle: {
    fontSize: Typography['2xl'] * 1.2,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  serviceSubtitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  featuresSection: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: Typography['2xl'],
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    flex: 1,
    minWidth: 280,
  },
  featureCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    padding: Spacing.md,
  },
  featureText: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    flex: 1,
  },
  useCasesSection: {
    marginBottom: Spacing.xl,
  },
  useCasesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
  useCaseCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 350,
    minWidth: 280,
  },
  useCaseCardContent: {
    padding: Spacing.lg,
  },
  useCaseTitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
  },
  useCaseDescription: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  whySection: {
    paddingVertical: Spacing.xl * 5,
    position: 'relative',
  },
  whyContainer: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  whyTitle: {
    fontSize: Typography['2xl'] * 1.2,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Spacing.xl * 3,
  },
  whyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
  whyCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 350,
    minWidth: 280,
  },
  whyCardContent: {
    padding: Spacing.xl * 2,
    alignItems: 'center',
  },
  whyIcon: {
    marginBottom: Spacing.md,
  },
  whyCardTitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  whyCardDescription: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
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
  ctaButtons: {
    flexDirection: 'row',
    gap: Spacing.lg,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Services;
