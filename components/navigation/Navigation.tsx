import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { Sheet, SheetContent, SheetTrigger } from 'components/layout/sheet';
import { Colors, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

const topLogo = require('assets/images/top_development_logo.png');

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", value: "home", route: "/home" },
    { label: "Services", value: "services", route: "/services" },
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
          <View style={styles.logoText}>
            <Text style={styles.logoTextTop}>TOP</Text>
            <Text style={styles.logoTextBottom}>Development</Text>
          </View>
        </Pressable>

        {/* Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <View style={styles.menuButton}>
              <MaterialIcons name="menu" size={24} color={Colors.text.primary} />
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
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
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
    height: 48,
    width: 48,
  },
  logoText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logoTextTop: {
    color: Colors.brand.primary,
    fontFamily: FontFamily.primary,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  logoTextBottom: {
    color: Colors.text.primary,
    fontFamily: FontFamily.primary,
    fontSize: 14,
    lineHeight: 17,
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
