import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { Card, CardContent } from 'components/layout/card';
import { GiantCard } from 'components/layout/GiantCard';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import { values } from 'lib/data/about_us';
import IconContainer, { IconType } from 'components/utils/IconContainer';

const AboutUs = () => {

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
        badge="About Us"
        title="Building Solutions That Matter"
        subtitle="Founded in 2025, driven by passion, powered by innovation"
      />

      {/* Our Story */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Story</Text>
          </View>

          <GiantCard
            values={[
              "TOP Development LLC was founded in September 2025 out of a passion for software development and a drive to solve meaningful problems. What began as an unexpected journey—starting in Pre-Law before realizing that path wasn't the right fit—turned into a pursuit of creating solutions that truly matter.",
              "That realization led to a move to Florida, where I attended Full Sail University and earned an Associate's Degree in Mobile Development. Over time, my skills expanded beyond mobile into web, backend, and DevOps, allowing me to build across the full stack of modern development.",
              "Today, TOP Development LLC is built on that same foundation of curiosity, adaptability, and commitment to delivering impactful software."
            ]}
          />
        </View>
      </View>

      {/* Our Mission */}
      <View style={styles.missionSection}>
        <View style={styles.missionContent}>
          <View style={styles.sectionInner}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Our Mission</Text>
            </View>

            <GiantCard
              values={[
                "At TOP Development LLC, our mission is simple: solve real problems with practical and lasting solutions. We take the time to analyze your unique needs, then design strategies that fit—not just for today, but for the future.",
                "By modernizing infrastructure and leveraging modern frameworks, we create solutions that are efficient, scalable, and built to grow with you. Our goal is to deliver technology that empowers, streamlines, and makes a meaningful difference."
              ]}
              cardStyle={styles.missionCard}
            />
          </View>
        </View>
      </View>

      {/* Our Values */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Values</Text>
            <Text style={styles.sectionSubtitle}>
              The principles that guide every project and partnership
            </Text>
          </View>

          <View style={styles.valuesGrid}>
            {values.map((value, index) => (
              <Card key={index} style={styles.valueCard}>
                <CardContent style={styles.valueCardContent}>
                  <IconContainer iconProps={{ name: value.icon, size: 48, color: Colors.brand.primary, type: IconType.MaterialIcons }} style={styles.valueIcon} />
                  <Text style={styles.valueTitle}>{value.title}</Text>
                  <Text style={styles.valueDescription}>{value.description}</Text>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsSection}>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2025</Text>
            <Text style={styles.statLabel}>Founded</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24/7</Text>
            <Text style={styles.statLabel}>Support Available</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>∞</Text>
            <Text style={styles.statLabel}>Possibilities</Text>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Let's Build Something Great Together</Text>
          <Text style={styles.ctaSubtitle}>
            Ready to start your project? Get in touch and let's discuss how we can help you achieve your goals.
          </Text>
          <PrimaryButton onPress={() => handleNavigate('contact')}>Contact Us</PrimaryButton>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: Spacing.xl * 3,
  },
  sectionInner: {
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
    maxWidth: 672,
  },
  missionSection: {
    paddingVertical: Spacing.xl * 5,
    position: 'relative',
  },
  missionContent: {
    zIndex: 10,
  },
  missionCard: {
    backgroundColor: 'rgba(234, 35, 32, 0.1)',
    borderColor: 'rgba(234, 35, 32, 0.3)',
    borderWidth: 1,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
  valueCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 280,
    minWidth: 200,
  },
  valueCardContent: {
    padding: Spacing.lg,
    alignItems: 'center',
  },
  valueIcon: {
    marginBottom: Spacing.md,
  },
  valueTitle: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  statsSection: {
    paddingVertical: Spacing.xl * 5,
    paddingHorizontal: Spacing.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  statItem: {
    alignItems: 'center',
    minWidth: 120,
  },
  statNumber: {
    fontSize: Typography['2xl'] * 1.6,
    fontFamily: FontFamily.primary,
    color: Colors.brand.primary,
    fontWeight: 'bold',
    marginBottom: Spacing.sm,
  },
  statLabel: {
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

export default AboutUs;
