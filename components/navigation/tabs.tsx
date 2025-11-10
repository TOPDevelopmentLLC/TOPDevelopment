import React, { createContext, useContext } from 'react';
import { View, Text, Pressable, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, BorderRadius, Spacing, FontFamily, FontSize } from 'constants/theme';

interface TabsProps {
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  style?: ViewStyle;
  className?: string;
}

interface TabsListProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  className?: string;
}

interface TabsTriggerProps {
  children?: React.ReactNode;
  value: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  className?: string;
}

interface TabsContentProps {
  children?: React.ReactNode;
  value: string;
  style?: ViewStyle;
  className?: string;
}

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType>({
  value: '',
  onValueChange: () => {},
});

export const Tabs: React.FC<TabsProps> = ({
  children,
  value: controlledValue,
  onValueChange,
  defaultValue = '',
  style,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <View style={[styles.tabs, style]}>
        {children}
      </View>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({
  children,
  style,
}) => {
  return (
    <View style={[styles.tabsList, style]}>
      {children}
    </View>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  children,
  value,
  style,
  textStyle,
}) => {
  const { value: selectedValue, onValueChange } = useContext(TabsContext);
  const isActive = selectedValue === value;

  return (
    <Pressable
      onPress={() => onValueChange(value)}
      style={({ pressed }) => [
        styles.tabsTrigger,
        isActive && styles.tabsTriggerActive,
        pressed && styles.tabsTriggerPressed,
        style,
      ]}
    >
      {typeof children === 'string' ? (
        <Text style={[
          styles.tabsTriggerText,
          isActive && styles.tabsTriggerTextActive,
          textStyle,
        ]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({
  children,
  value,
  style,
}) => {
  const { value: selectedValue } = useContext(TabsContext);

  if (selectedValue !== value) {
    return null;
  }

  return (
    <View style={[styles.tabsContent, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    gap: Spacing.md,
  },
  tabsList: {
    flexDirection: 'row',
    backgroundColor: Colors.background.gray,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xs,
    gap: Spacing.xs,
    flexWrap: 'wrap',
  },
  tabsTrigger: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
    borderWidth: 1,
    borderColor: 'transparent',
    minWidth: 100,
  },
  tabsTriggerActive: {
    backgroundColor: Colors.brand.primary,
    borderColor: Colors.brand.primary,
  },
  tabsTriggerPressed: {
    opacity: 0.7,
  },
  tabsTriggerText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  tabsTriggerTextActive: {
    color: Colors.text.primary,
  },
  tabsContent: {
    flex: 1,
  },
});
