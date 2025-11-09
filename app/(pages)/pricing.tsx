import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CircuitBackground } from 'components/layout/CircuitBackground';
import { BasePage } from 'components/layout/BasePage';
import { Badge } from 'components/data/badge';
import { Button } from 'components/buttons/button';
import { Card, CardContent } from 'components/layout/card';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

const Pricing = () => {
  const websiteBuilds = [
    {
      name: "Simple Landing Page",
      price: "$1,000 - $1,500",
      description: "Perfect for startups and small projects",
      features: [
        "1-3 pages (Home, About, Contact)",
        "Responsive Design",
        "Contact Form with Email Notifications",
        "Optimized Images",
        "< 3 second load times",
        "SEO Basics",
        "Hosting Setup",
        "Domain Setup",
        "Design Revisions (3 rounds)",
      ],
    },
    {
      name: "Small Business Site",
      price: "$3,000 - $4,000",
      description: "Comprehensive solution for small businesses",
      features: [
        "Everything from Simple Landing Page",
        "5-10 pages",
        "Dynamic Drawer Menu",
        "Contact Us Forms",
        "Service Inquiry Forms",
        "Newsletter Signup Forms",
        "CMS Plugin",
        "Custom CMS",
        "Google Maps Integration",
        "Design Revisions (5 rounds)",
      ],
      popular: true,
    },
    {
      name: "Advanced/Custom Site",
      price: "$5,000 - $15,000",
      description: "Feature-rich applications",
      features: [
        "Everything from Small Business Website",
        "10-25 pages with complex architecture",
        "User Authentication",
        "User Dashboards/Profiles",
        "Advanced Search/Filtering",
        "API Integrations",
        "Document Management System",
        "Unlimited Custom forms",
        "CRM Integration (HubSpot, Salesforce, etc)",
        "Payment Processing (Stripe/PayPal)",
        "Social Media API Integrations",
      ],
    },
    {
      name: "Enterprise Site",
      price: "$15,000 - $75,000",
      description: "Large-scale enterprise solutions",
      features: [
        "Multi-Site architecture or site network",
        "Complex database architecture",
        "Advanced API development",
        "Real-time features (notifications/live updates)",
        "Data visualization and custom reporting",
        "Document generation (invoices, contracts, reports)",
        "ERP systems (SAP, Oracle, NetSuite)",
        "CRM (Salesforce, Microsoft Dynamics)",
        "Custom legacy system integrations",
        "HR systems integration",
        "Microservices architecture",
        "Auto-scaling infrastructure",
        "Load balancing",
        "Staging/prod environments",
        "Monthly strategy calls",
      ],
    },
    {
      name: "E-Commerce Site",
      price: "$7,500 - $40,000",
      description: "Full-featured online store",
      features: [
        "Up to 500 SKUs (+$500 for every 100 SKUs after 500)",
        "Product Category/Details Pages",
        "Cart/Checkout Pages",
        "Shipping/Returns Policy Pages",
        "Blog Pages",
        "Real-time inventory tracking",
        "Low stock alerts",
        "Order processing and status updates",
        "Order history",
        "Wishlist",
        "Email notifications",
        "Customer reviews and ratings",
        "Newsletter signup",
        "Gift card functionality",
        "Stripe/PayPal Integration",
        "Tax Calculation (TaxJar Integration)",
        "Shipping Calculator",
        "International Shipping Support",
        "Guest Checkout",
        "Design Revisions (5 rounds)",
      ],
    },
  ];

  const addOns = [
    { name: "Additional Support Hours", price: "$100/hour" },
    { name: "Live-chat Integration", price: "$500" },
    { name: "Advanced Animations", price: "$1,000" },
    { name: "Appointment Booking", price: "$1,000" },
    { name: "Member Portal", price: "$2,000" },
    { name: "Custom Admin Panel", price: "$2,000" },
    { name: "Loyalty/Rewards", price: "$2,000" },
    { name: "Mobile Application", price: "$2,000+" },
    { name: "Multi-Currency Support", price: "$2,500" },
    { name: "Subscriptions/Recurring Payments", price: "$2,500" },
    { name: "Third-Party API Development", price: "$4,000" },
    { name: "Multi-Vendor Marketplace", price: "$7,500" },
  ];

  const maintenancePlans = [
    {
      name: "Essentials Only",
      price: "$50/month",
      annualPrice: "$510/annually",
      features: [
        "AWS Hosting",
        "Security Monitoring",
        "Monthly Uptime Reports",
        "2 Hours of Minor Updates/Support per month",
        "SSL Certificate Management",
      ],
    },
    {
      name: "Basic",
      price: "$100/month",
      annualPrice: "$1,080/annually",
      features: [
        "Everything in Essentials Only",
        "5 Hours of Minor Updates/Support per month",
        "Plugin/Dependency Updates",
        "Monthly Security Scans",
        "Monthly Performance Optimization",
        "Google Analytics",
      ],
      popular: true,
    },
    {
      name: "Professional",
      price: "$300/month",
      annualPrice: "$3,240/annually",
      features: [
        "Everything in Basic",
        "10 Hours of Minor Updates/Support per month",
        "Priority Email Support",
        "Quarterly Strategy Consulting",
        "Bi-Weekly Security Scans",
        "Bi-Weekly Performance Optimization",
      ],
    },
    {
      name: "Enterprise",
      price: "$600 - $2,500/month",
      annualPrice: "$6,120 - $25,500/annually",
      features: [
        "Everything in Professional",
        "24/7 Security Monitoring",
        "25+ Hours of Development Support per month",
        "A/B Testing Implementation",
        "Scalability Planning",
        "Infrastructure Optimization",
        "Disaster Recovery Planning",
        "Monthly Strategy Consulting",
      ],
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
          <Badge style={styles.badge} textStyle={styles.badgeText}>
            Pricing
          </Badge>
          <Text style={styles.heroTitle}>Transparent, Flexible Pricing</Text>
          <Text style={styles.heroSubtitle}>
            Choose the package that fits your needs. All pricing is transparent with no hidden fees.
          </Text>
        </View>
      </View>

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
                        <MaterialIcons
                          name="check-circle"
                          size={16}
                          color={Colors.brand.primary}
                          style={styles.featureIcon}
                        />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                  <Button
                    onPress={() => handleNavigate('contact')}
                    style={StyleSheet.flatten([styles.pricingButton, tier.popular && styles.popularButton])}
                  >
                    <Text
                      style={StyleSheet.flatten([styles.pricingButtonText, tier.popular && styles.popularButtonText])}
                    >
                      Get Started
                    </Text>
                  </Button>
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
                        <MaterialIcons
                          name="check-circle"
                          size={16}
                          color={Colors.brand.primary}
                          style={styles.featureIcon}
                        />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                  <Button
                    onPress={() => handleNavigate('contact')}
                    style={StyleSheet.flatten([styles.pricingButton, plan.popular && styles.popularButton])}
                  >
                    <Text
                      style={StyleSheet.flatten([styles.pricingButtonText, plan.popular && styles.popularButtonText])}
                    >
                      Choose Plan
                    </Text>
                  </Button>
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
            <Button onPress={() => handleNavigate('contact')} style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Request Custom Quote</Text>
            </Button>
          </View>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
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
  section: {
    paddingVertical: Spacing.xl * 3,
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
    paddingVertical: Spacing.md,
  },
  popularButton: {
    backgroundColor: Colors.brand.primary,
  },
  pricingButtonText: {
    color: Colors.text.primary,
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    fontWeight: '500',
  },
  popularButtonText: {
    color: Colors.text.primary,
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
    paddingVertical: Spacing.xl * 5,
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
  ctaButton: {
    backgroundColor: Colors.brand.primary,
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

export default Pricing;
