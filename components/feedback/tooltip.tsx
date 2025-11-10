import React, { useState, ReactNode } from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle, TextStyle } from 'react-native';
import { Colors, BorderRadius, Spacing, FontFamily } from 'constants/theme';
import { Typography } from 'constants/globalStyles';

interface TooltipProviderProps {
  children: ReactNode;
  delayDuration?: number;
}

function TooltipProvider({ children }: TooltipProviderProps) {
  return <>{children}</>;
}

interface TooltipProps {
  children: ReactNode;
}

interface TooltipContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const TooltipContext = React.createContext<TooltipContextType | null>(null);

function Tooltip({ children }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TooltipContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps {
  children: ReactNode;
  style?: ViewStyle;
  asChild?: boolean;
}

function TooltipTrigger({ children, style }: TooltipTriggerProps) {
  const context = React.useContext(TooltipContext);

  if (!context) {
    return <>{children}</>;
  }

  const { setIsOpen } = context;

  return (
    <Pressable
      onPressIn={() => setIsOpen(true)}
      onPressOut={() => setIsOpen(false)}
      style={style}
    >
      {children}
    </Pressable>
  );
}

interface TooltipContentProps {
  children: ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  sideOffset?: number;
}

function TooltipContent({ children, style, textStyle }: TooltipContentProps) {
  const context = React.useContext(TooltipContext);

  if (!context || !context.isOpen) {
    return null;
  }

  return (
    <View style={[styles.tooltipContent, style]}>
      <Text style={[styles.tooltipText, textStyle]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tooltipContent: {
    position: 'absolute',
    backgroundColor: Colors.brand.primary,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    zIndex: 50,
    maxWidth: 200,
  },
  tooltipText: {
    fontSize: Typography.xs,
    fontFamily: FontFamily.secondary,
    color: Colors.text.primary,
    textAlign: 'center',
  },
});

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
