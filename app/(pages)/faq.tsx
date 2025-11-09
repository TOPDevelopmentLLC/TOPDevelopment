import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/layout/accordion';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import { router } from 'expo-router';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import { faqs } from 'lib/data/faq';

const FAQs = () => {
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
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with TOP Development LLC"
      />

      {/* FAQs */}
      <View style={styles.faqSection}>
        <View style={styles.faqContainer}>
          <Accordion type="single" collapsible style={styles.accordion}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                style={styles.accordionItem}
              >
                <AccordionTrigger style={styles.accordionTrigger}>
                  <Text style={styles.accordionTriggerText}>{faq.question}</Text>
                </AccordionTrigger>
                <AccordionContent style={styles.accordionContent}>
                  <Text style={styles.accordionContentText}>{faq.answer}</Text>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </View>
      </View>

      {/* Still Have Questions */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaContainer}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Still Have Questions?</Text>
            <Text style={styles.ctaSubtitle}>
              Can't find the answer you're looking for? Get in touch with our team and we'll be happy to help.
            </Text>
            <PrimaryButton onPress={() => handleNavigate('contact')}>Contact Us</PrimaryButton>
          </View>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  faqSection: {
    paddingVertical: Spacing.xl * 3,
  },
  faqContainer: {
    width: '100%',
    maxWidth: 896,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  accordion: {
    gap: Spacing.md,
  },
  accordionItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
  },
  accordionTrigger: {
    paddingVertical: Spacing.lg,
  },
  accordionTriggerText: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    textAlign: 'left',
  },
  accordionContent: {
    paddingBottom: Spacing.lg,
  },
  accordionContentText: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    lineHeight: Typography.base * 1.6,
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
});

export default FAQs;
