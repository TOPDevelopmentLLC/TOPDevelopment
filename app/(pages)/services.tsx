import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CircuitBackground } from 'components/layout/CircuitBackground';
import { BasePage } from 'components/layout/BasePage';
import { Badge } from 'components/data/badge';
import { Button } from 'components/buttons/button';
import { Card, CardContent } from 'components/layout/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/navigation/tabs';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

const Services = () => {
  const [activeTab, setActiveTab] = useState('web');

  const serviceCategories = [
    { value: 'web', label: 'Web Development', icon: 'code' },
    { value: 'mobile', label: 'Mobile Apps', icon: 'smartphone' },
    { value: 'backend', label: 'Backend', icon: 'storage' },
    { value: 'seo', label: 'SEO', icon: 'search' },
    { value: 'infrastructure', label: 'Infrastructure', icon: 'cloud' },
    { value: 'consultation', label: 'Consultation', icon: 'chat' },
  ];

  const serviceDetails = {
    web: {
      title: "Web Development",
      subtitle: "Build powerful, responsive web applications",
      features: [
        "Custom React & React Native Applications",
        "Mobile-friendly Web Pages",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Integration",
        "Responsive Design",
      ],
      useCases: [
        {
          title: "E-Commerce Platforms",
          description: "Full-featured online stores with payment processing, inventory management, and customer portals",
        },
        {
          title: "SaaS Applications",
          description: "Scalable software-as-a-service platforms with user management and subscription billing",
        },
        {
          title: "Corporate Websites",
          description: "Professional business websites with CMS integration and SEO optimization",
        },
      ],
    },
    mobile: {
      title: "Mobile Development",
      subtitle: "Native and cross-platform mobile experiences",
      features: [
        "iOS & Android Development",
        "React Native Applications",
        "Cross-Platform Solutions",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality",
      ],
      useCases: [
        {
          title: "Consumer Apps",
          description: "Feature-rich mobile applications for iOS and Android with seamless user experiences",
        },
        {
          title: "Enterprise Mobility",
          description: "Internal business apps for field operations, inventory, and workforce management",
        },
        {
          title: "Companion Apps",
          description: "Mobile extensions of your web platform for on-the-go access",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      subtitle: "Robust and scalable server-side solutions",
      features: [
        "RESTful API Development",
        "Spring Boot Framework",
        "Database Design & Optimization",
        "Microservices Architecture",
        "Real-time Data Processing",
        "Authentication & Authorization",
      ],
      useCases: [
        {
          title: "API Development",
          description: "Secure, scalable APIs for mobile apps, web platforms, and third-party integrations",
        },
        {
          title: "Data Processing",
          description: "Complex data pipelines and real-time processing systems",
        },
        {
          title: "Integration Services",
          description: "Connect multiple systems and services with custom middleware solutions",
        },
      ],
    },
    seo: {
      title: "SEO Services",
      subtitle: "Increase visibility and drive organic traffic",
      features: [
        "Technical SEO Audit",
        "Keyword Research & Strategy",
        "On-Page Optimization",
        "Performance Optimization",
        "Schema Markup Implementation",
        "Analytics & Reporting",
      ],
      useCases: [
        {
          title: "Local SEO",
          description: "Optimize your presence for local search results and Google Maps",
        },
        {
          title: "E-commerce SEO",
          description: "Product page optimization and structured data for better product visibility",
        },
        {
          title: "Technical SEO",
          description: "Core Web Vitals optimization, site speed, and crawlability improvements",
        },
      ],
    },
    infrastructure: {
      title: "Infrastructure Modernization",
      subtitle: "Upgrade and optimize your technology stack",
      features: [
        "AWS Supported Infrastructure",
        "DevOps & CI/CD Pipeline",
        "Auto-scaling Infrastructure",
        "Load Balancing & CDN",
        "Security & Compliance",
        "Disaster Recovery Planning",
      ],
      useCases: [
        {
          title: "Cloud Migration",
          description: "Move legacy applications to modern cloud infrastructure with minimal downtime",
        },
        {
          title: "Performance Optimization",
          description: "Improve application speed and reliability with infrastructure upgrades",
        },
        {
          title: "Cost Optimization",
          description: "Reduce infrastructure costs while maintaining or improving performance",
        },
      ],
    },
    consultation: {
      title: "Consultation Services",
      subtitle: "Expert guidance for your technology decisions",
      features: [
        "Technology Stack Selection",
        "Architecture Design Review",
        "Code Quality Assessment",
        "Scalability Planning",
        "Security Audit",
        "Strategic Roadmap Planning",
      ],
      useCases: [
        {
          title: "Project Planning",
          description: "Define scope, timeline, and technology choices for your next project",
        },
        {
          title: "Code Review",
          description: "Expert analysis of your codebase with actionable recommendations",
        },
        {
          title: "Strategy Sessions",
          description: "Monthly consulting to guide your technology decisions and roadmap",
        },
      ],
    },
  };

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
      <View style={styles.heroSection}>
        <CircuitBackground />
        <View style={styles.heroContent}>
          <Badge style={styles.badge} textStyle={styles.badgeText}>
            Services
          </Badge>
          <Text style={styles.heroTitle}>Comprehensive Development Solutions</Text>
          <Text style={styles.heroSubtitle}>
            From concept to deployment, we provide end-to-end software development services
          </Text>
        </View>
      </View>

      {/* Service Tabs */}
      <View style={styles.tabsSection}>
        <View style={styles.tabsContainer}>
          <Tabs value={activeTab} onValueChange={setActiveTab} style={styles.tabs}>
            <TabsList style={styles.tabsList}>
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  style={styles.tabTrigger}
                >
                  <View style={styles.tabTriggerContent}>
                    <MaterialIcons name={category.icon as any} size={16} color={Colors.text.primary} />
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
                    {service.features.map((feature, index) => (
                      <Card key={index} style={styles.featureCard}>
                        <CardContent style={styles.featureCardContent}>
                          <MaterialIcons name="check-circle" size={20} color={Colors.brand.primary} />
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
                    {service.useCases.map((useCase, index) => (
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
                <MaterialIcons name="flash-on" size={48} color={Colors.brand.primary} style={styles.whyIcon} />
                <Text style={styles.whyCardTitle}>AI-Powered Speed</Text>
                <Text style={styles.whyCardDescription}>
                  Leverage cutting-edge AI tools to build and deploy faster than traditional methods
                </Text>
              </CardContent>
            </Card>
            <Card style={styles.whyCard}>
              <CardContent style={styles.whyCardContent}>
                <MaterialIcons name="security" size={48} color={Colors.brand.primary} style={styles.whyIcon} />
                <Text style={styles.whyCardTitle}>Quality Assurance</Text>
                <Text style={styles.whyCardDescription}>
                  Rigorous testing and quality control ensure reliable, production-ready solutions
                </Text>
              </CardContent>
            </Card>
            <Card style={styles.whyCard}>
              <CardContent style={styles.whyCardContent}>
                <MaterialIcons name="trending-up" size={48} color={Colors.brand.primary} style={styles.whyIcon} />
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
            <Button onPress={() => handleNavigate('contact')} style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Contact Us</Text>
            </Button>
            <Button
              onPress={() => handleNavigate('pricing')}
              variant="outline"
              style={styles.ctaButtonSecondary}
            >
              <Text style={styles.ctaButtonSecondaryText}>View Pricing</Text>
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
  },
  tabTrigger: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    paddingVertical: Spacing.sm * 1.5,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.sm,
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
  ctaButtonSecondary: {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: Spacing.xl * 2,
    paddingVertical: Spacing.lg * 1.5,
  },
  ctaButtonSecondaryText: {
    color: Colors.text.primary,
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    fontWeight: '500',
  },
});

export default Services;
