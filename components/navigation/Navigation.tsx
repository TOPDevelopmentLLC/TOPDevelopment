import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { router, usePathname } from 'expo-router';
import { Sheet, SheetContent, SheetTrigger } from 'components/layout/sheet';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';
import IconContainer, { IconType } from 'components/utils/IconContainer';

const topLogo = require('assets/images/top_development_logo.png');

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", value: "home", route: "/home" },
    { label: "Services", value: "services", route: "/services" },
    { label: "Products", value: "products", route: "/products" },
    { label: "Pricing", value: "pricing", route: "/pricing" },
    { label: "About Us", value: "about", route: "/about_us" },
    { label: "FAQs", value: "faqs", route: "/faq" },
    { label: "Contact", value: "contact", route: "/contact_us" },
  ];

  const handleNavigation = (route: string) => {
    router.push(route as any);
    setOpen(false);
  };

  return (
    <View style={styles.nav}>
      <View style={styles.container}>
        {/* Logo */}
        <Pressable
          onPress={() => handleNavigation("/home")}
          style={({ pressed }) => [
            styles.logoButton,
            pressed && styles.logoButtonPressed
          ]}
        >
          <Image
            source={topLogo}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </Pressable>

        {/* Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <View style={styles.menuButton}>
              <IconContainer iconProps={{ name: "menu", size: 24, color: Colors.text.primary, type: IconType.MaterialIcons }} />
            </View>
          </SheetTrigger>
          <SheetContent side="right" style={styles.sheetContent}>
            <View style={styles.menuContainer}>
              {menuItems.map((item) => {
                const isActive = pathname === item.route;
                return (
                  <Pressable
                    key={item.value}
                    onPress={() => handleNavigation(item.route)}
                    style={({ pressed }) => [
                      styles.menuItem,
                      isActive && styles.menuItemActive,
                      pressed && styles.menuItemPressed
                    ]}
                  >
                    <Text
                      style={[
                        styles.menuItemText,
                        isActive && styles.menuItemTextActive
                      ]}
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </SheetContent>
        </Sheet>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: Colors.background.dark,
  },
  container: {
    width: '100%',
    paddingLeft: Spacing.md,
    paddingRight: Spacing.xl * 2,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  logoButtonPressed: {
    opacity: 0.8,
  },
  logoImage: {
    height: 120,
    width: 420,
  },
  menuButton: {
    padding: Spacing.sm,
    borderRadius: 8,
  },
  sheetContent: {
    width: 300,
    backgroundColor: Colors.background.dark,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: Spacing.xl,
  },
  menuContainer: {
    flexDirection: 'column',
    gap: Spacing.lg,
    marginTop: Spacing.xl * 3,
  },
  menuItem: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: 8,
  },
  menuItemActive: {
    backgroundColor: 'rgba(234, 35, 32, 0.1)',
  },
  menuItemPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  menuItemText: {
    fontSize: Typography.xl,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    textAlign: 'left',
  },
  menuItemTextActive: {
    color: Colors.brand.primary,
  },
});
