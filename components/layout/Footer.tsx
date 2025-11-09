import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

export function Footer() {
  const handleNavigate = (page: string) => {
    const pageMap: { [key: string]: string } = {
      home: '/home',
      services: '/services',
      pricing: '/pricing',
      about: '/about_us',
      faq: '/faq',
      contact: '/contact_us',
    };

    const route = pageMap[page];
    if (route) {
      router.push(route as any);
    }
  };

  const handleExternalLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.grid}>
          {/* Company */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Company</Text>
            <View style={styles.linkList}>
              <Pressable onPress={() => handleNavigate('about')}>
                <Text style={styles.link}>About Us</Text>
              </Pressable>
              <Pressable onPress={() => handleNavigate('contact')}>
                <Text style={styles.link}>Contact</Text>
              </Pressable>
            </View>
          </View>

          {/* Services */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Services</Text>
            <View style={styles.linkList}>
              <Pressable onPress={() => handleNavigate('services')}>
                <Text style={styles.link}>Web Development</Text>
              </Pressable>
              <Pressable onPress={() => handleNavigate('services')}>
                <Text style={styles.link}>Mobile Development</Text>
              </Pressable>
              <Pressable onPress={() => handleNavigate('services')}>
                <Text style={styles.link}>Infrastructure</Text>
              </Pressable>
              <Pressable onPress={() => handleNavigate('services')}>
                <Text style={styles.link}>SEO Services</Text>
              </Pressable>
            </View>
          </View>

          {/* Resources */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>
            <View style={styles.linkList}>
              <Pressable onPress={() => handleNavigate('pricing')}>
                <Text style={styles.link}>Pricing</Text>
              </Pressable>
              <Pressable onPress={() => handleNavigate('faq')}>
                <Text style={styles.link}>FAQs</Text>
              </Pressable>
              <Pressable onPress={() => handleNavigate('contact')}>
                <Text style={styles.link}>Privacy Policy</Text>
              </Pressable>
            </View>
          </View>

          {/* Connect */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Connect</Text>
            <View style={styles.socialLinks}>
              <Pressable onPress={() => handleExternalLink('https://facebook.com')}>
                <MaterialIcons name="facebook" size={20} color="#9ca3af" />
              </Pressable>
              <Pressable onPress={() => handleExternalLink('https://twitter.com')}>
                <MaterialIcons name="flutter-dash" size={20} color="#9ca3af" />
              </Pressable>
              <Pressable onPress={() => handleExternalLink('https://linkedin.com')}>
                <MaterialIcons name="share" size={20} color="#9ca3af" />
              </Pressable>
              <Pressable onPress={() => handleExternalLink('https://github.com')}>
                <MaterialIcons name="code" size={20} color="#9ca3af" />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Logo & Copyright */}
        <View style={styles.bottomSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>TOP</Text>
            <Text style={styles.logoSubtext}>Dev</Text>
          </View>
          <Text style={styles.copyright}>
            © 2025 TOP Development LLC. All rights reserved.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.background.dark,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: Spacing.xl * 5,
  },
  container: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl * 3,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xl * 2,
    marginBottom: Spacing.xl * 2,
  },
  section: {
    flex: 1,
    minWidth: 150,
  },
  sectionTitle: {
    color: Colors.text.primary,
    fontSize: Typography.base,
    fontFamily: FontFamily.primary,
    marginBottom: Spacing.md,
    fontWeight: '500',
  },
  linkList: {
    gap: Spacing.sm,
  },
  link: {
    color: '#9ca3af',
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    paddingVertical: Spacing.xs,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: Spacing.xl * 2,
    alignItems: 'center',
    gap: Spacing.md,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    opacity: 0.5,
  },
  logoText: {
    fontSize: Typography.lg,
    fontFamily: FontFamily.primary,
    color: '#6b7280',
    fontWeight: 'bold',
  },
  logoSubtext: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.primary,
    color: '#6b7280',
  },
  copyright: {
    color: '#6b7280',
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    textAlign: 'center',
  },
});
