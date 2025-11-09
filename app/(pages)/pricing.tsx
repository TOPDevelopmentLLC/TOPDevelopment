import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { Badge } from 'components/data/badge';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { Card, CardContent } from 'components/layout/card';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import { websiteBuilds, addOns, maintenancePlans } from 'lib/data/pricing';
import IconContainer, { IconType } from 'components/utils/IconContainer';

const Pricing = () => {
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
        badge="Pricing"
        title="Transparent, Flexible Pricing"
        subtitle="Choose the package that fits your needs. All pricing is transparent with no hidden fees."
      />

      {/* Website Builds */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Website Development</Text>
            <Text style={styles.sectionSubtitle}>
              Complete website solutions from landing pages to enterprise platforms
            </Text>
          </View>

          <View style={styles.grid}>
            {websiteBuilds.map((tier, index) => (
              <Card
                key={index}
                style={StyleSheet.flatten([styles.pricingCard, tier.popular && styles.popularCard])}
              >
                {tier.popular && (
                  <Badge style={styles.popularBadge} textStyle={styles.popularBadgeText}>
                    Most Popular
                  </Badge>
                )}
                <CardContent style={styles.pricingCardContent}>
                  <View style={styles.pricingHeader}>
                    <Text style={styles.pricingName}>{tier.name}</Text>
                    <Text style={styles.pricingDescription}>{tier.description}</Text>
                    <Text style={styles.pricingPrice}>{tier.price}</Text>
                  </View>
                  <View style={styles.featureList}>
                    {tier.features.map((feature, fIndex) => (
                      <View key={fIndex} style={styles.featureItem}>
                        <IconContainer
                          iconProps={{
                            name: "check-circle",
                            size: 16,
                            color: Colors.brand.primary,
                            type: IconType.MaterialIcons
                          }}
                          style={styles.featureIcon}
                        />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                  <PrimaryButton
                    onPress={() => handleNavigate('contact')}
                    style={StyleSheet.flatten([styles.pricingButton, tier.popular && styles.popularButton])}
                  >
                    Get Started
                  </PrimaryButton>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>
      </View>

      {/* Add-ons */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Simple Add-ons</Text>
            <Text style={styles.sectionSubtitle}>Enhance your website with additional features</Text>
          </View>

          <View style={styles.addOnGrid}>
            {addOns.map((addon, index) => (
              <Card key={index} style={styles.addOnCard}>
                <CardContent style={styles.addOnCardContent}>
                  <Text style={styles.addOnName}>{addon.name}</Text>
                  <Text style={styles.addOnPrice}>{addon.price}</Text>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>
      </View>

      {/* Maintenance & Support */}
      <View style={styles.section}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Maintenance & Support</Text>
            <Text style={styles.sectionSubtitle}>
              Keep your website secure, updated, and performing at its best
            </Text>
          </View>

          <View style={styles.grid}>
            {maintenancePlans.map((plan, index) => (
              <Card
                key={index}
                style={StyleSheet.flatten([styles.pricingCard, plan.popular && styles.popularCard])}
              >
                {plan.popular && (
                  <Badge style={styles.popularBadge} textStyle={styles.popularBadgeText}>
                    Most Popular
                  </Badge>
                )}
                <CardContent style={styles.pricingCardContent}>
                  <View style={styles.pricingHeader}>
                    <Text style={styles.pricingName}>{plan.name}</Text>
                    <Text style={styles.maintenancePrice}>{plan.price}</Text>
                    <Text style={styles.maintenanceAnnualPrice}>{plan.annualPrice}</Text>
                  </View>
                  <View style={styles.featureList}>
                    {plan.features.map((feature, fIndex) => (
                      <View key={fIndex} style={styles.featureItem}>
                        <IconContainer
                          iconProps={{
                            name: "check-circle",
                            size: 16,
                            color: Colors.brand.primary,
                            type: IconType.MaterialIcons
                          }}
                          style={styles.featureIcon}
                        />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                  <PrimaryButton
                    onPress={() => handleNavigate('contact')}
                    style={StyleSheet.flatten([styles.pricingButton, plan.popular && styles.popularButton])}
                  >
                    Choose Plan
                  </PrimaryButton>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaContainer}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Need a Custom Quote?</Text>
            <Text style={styles.ctaSubtitle}>
              Every project is unique. Contact us for a personalized quote tailored to your specific requirements.
            </Text>
            <PrimaryButton onPress={() => handleNavigate('contact')}>Request Custom Quote</PrimaryButton>
          </View>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: Spacing.xl * 2,
  },
  sectionContainer: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: Spacing.xl * 3,
  },
  sectionTitle: {
    fontSize: Typography['2xl'] * 1.2,
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
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
  pricingCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 350,
    minWidth: 280,
    position: 'relative',
  },
  popularCard: {
    borderColor: Colors.brand.primary,
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: Colors.brand.primary,
    zIndex: 10,
  },
  popularBadgeText: {
    color: Colors.text.primary,
  },
  pricingCardContent: {
    padding: Spacing.lg,
  },
  pricingHeader: {
    marginBottom: Spacing.lg,
  },
  pricingName: {
    fontSize: Typography['2xl'],
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  pricingDescription: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    marginBottom: Spacing.md,
  },
  pricingPrice: {
    fontSize: Typography['2xl'] * 1.2,
    fontFamily: FontFamily.primary,
    color: Colors.brand.primary,
  },
  maintenancePrice: {
    fontSize: Typography['2xl'],
    fontFamily: FontFamily.primary,
    color: Colors.brand.primary,
    marginBottom: Spacing.xs,
  },
  maintenanceAnnualPrice: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
  featureList: {
    gap: Spacing.sm * 1.5,
    marginBottom: Spacing.lg,
    flex: 1,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
  },
  featureIcon: {
    flexShrink: 0,
    marginTop: 2,
  },
  featureText: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    flex: 1,
  },
  pricingButton: {
    width: '100%',
  },
  popularButton: {
    // Override handled by PrimaryButton
  },
  addOnGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    justifyContent: 'center',
  },
  addOnCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 280,
    minWidth: 200,
  },
  addOnCardContent: {
    padding: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addOnName: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    flex: 1,
  },
  addOnPrice: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.brand.primary,
    marginLeft: Spacing.sm,
  },
  ctaSection: {
    paddingVertical: Spacing.xl * 3,
  },
  ctaContainer: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  ctaCard: {
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

export default Pricing;
