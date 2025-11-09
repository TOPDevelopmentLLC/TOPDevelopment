import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, BorderRadius, Spacing, FontFamily, FontSize } from '../../constants/theme';

interface AccordionProps {
  children?: React.ReactNode;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  style?: ViewStyle;
  className?: string;
}

interface AccordionItemProps {
  children?: React.ReactNode;
  value: string;
  style?: ViewStyle;
  className?: string;
}

interface AccordionTriggerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  className?: string;
}

interface AccordionContentProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  className?: string;
}

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = React.createContext<AccordionContextType>({
  openItems: [],
  toggleItem: () => {},
  type: 'single',
});

export const Accordion: React.FC<AccordionProps> = ({
  children,
  type = 'single',
  collapsible = true,
  style,
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(prev =>
        prev.includes(value) && collapsible ? [] : [value]
      );
    } else {
      setOpenItems(prev =>
        prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <View style={[styles.accordion, style]}>
        {children}
      </View>
    </AccordionContext.Provider>
  );
};

const AccordionItemContext = React.createContext<string>('');

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  style,
}) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <View style={[styles.accordionItem, style]}>
        {children}
      </View>
    </AccordionItemContext.Provider>
  );
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  style,
  textStyle,
}) => {
  const { openItems, toggleItem } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const isOpen = openItems.includes(value);

  return (
    <Pressable
      onPress={() => toggleItem(value)}
      style={({ pressed }) => [
        styles.trigger,
        pressed && styles.triggerPressed,
        style,
      ]}
    >
      <Text style={[styles.triggerText, textStyle]}>
        {children}
      </Text>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={24}
        color={Colors.text.secondary}
        style={[
          styles.icon,
          isOpen && styles.iconRotated,
        ]}
      />
    </Pressable>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  style,
}) => {
  const { openItems } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const isOpen = openItems.includes(value);

  if (!isOpen) return null;

  return (
    <View style={[styles.content, style]}>
      {typeof children === 'string' ? (
        <Text style={styles.contentText}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    gap: Spacing.md,
  },
  accordionItem: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.primary,
  },
  trigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    gap: Spacing.md,
  },
  triggerPressed: {
    opacity: 0.7,
  },
  triggerText: {
    flex: 1,
    fontSize: FontSize.md,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
  },
  icon: {
    // React Native doesn't support CSS transitions
  },
  iconRotated: {
    transform: [{ rotate: '180deg' }],
  },
  content: {
    paddingBottom: Spacing.md,
  },
  contentText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
});
