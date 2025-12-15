import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { BasePage } from 'components/layout/BasePage';
import { HeroSection } from 'components/layout/HeroSection';
import { Card, CardContent } from 'components/layout/card';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import IconContainer, { IconType } from 'components/utils/IconContainer';

interface Product {
  name: string;
  url: string;
  description: string;
  icon: string;
}

const products: Product[] = [
  {
    name: 'Lunace Labs',
    url: 'https://lunacelabs.ai',
    description: 'AI-powered solutions for modern businesses',
    icon: 'science',
  },
  {
    name: 'Word Wolf',
    url: 'https://wordwolf.ai',
    description: 'AI-Content Creation Platform',
    icon: 'text-fields',
  },
  {
    name: 'Spice of Life',
    url: 'https://spiceoflife.app',
    description: 'Lifestyle and wellness application',
    icon: 'local-dining',
  },
  {
    name: 'Jarvis Education',
    url: 'https://jarviseducation.app',
    description: 'IEP-support platform',
    icon: 'school',
  },
];

const Products = () => {
  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <BasePage>
      {/* Hero Section */}
      <HeroSection
        badge="Products"
        title="Our Products"
        subtitle="Explore our suite of innovative applications and platforms"
      />

      {/* Products Grid */}
      <View style={styles.productsSection}>
        <View style={styles.productsContainer}>
          <View style={styles.productsGrid}>
            {products.map((product, index) => (
              <Pressable
                key={index}
                onPress={() => handleOpenLink(product.url)}
                style={({ pressed }) => [
                  pressed && styles.cardPressed
                ]}
              >
                <Card style={styles.productCard}>
                  <CardContent style={styles.productCardContent}>
                    <IconContainer
                      iconProps={{
                        name: product.icon,
                        size: 48,
                        color: Colors.brand.primary,
                        type: IconType.MaterialIcons,
                      }}
                      style={styles.productIcon}
                    />
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>
                    <View style={styles.linkContainer}>
                      <IconContainer
                        iconProps={{
                          name: 'open-in-new',
                          size: 16,
                          color: Colors.brand.primary,
                          type: IconType.MaterialIcons,
                        }}
                      />
                      <Text style={styles.productLink}>{product.url.replace('https://', '')}</Text>
                    </View>
                  </CardContent>
                </Card>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </BasePage>
  );
};

const styles = StyleSheet.create({
  productsSection: {
    paddingVertical: Spacing.xl * 3,
  },
  productsContainer: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
  productCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    width: '100%',
    maxWidth: 350,
    minWidth: 280,
  },
  cardPressed: {
    opacity: 0.8,
  },
  productCardContent: {
    padding: Spacing.xl * 2,
    alignItems: 'center',
  },
  productIcon: {
    marginBottom: Spacing.md,
  },
  productName: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: Typography.base,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  productLink: {
    fontSize: Typography.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.brand.primary,
  },
});

export default Products;
