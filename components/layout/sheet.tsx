import React, { useState, createContext, useContext, ReactNode } from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, BorderRadius, Spacing, FontFamily, FontSize } from 'constants/theme';

interface SheetContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SheetContext = createContext<SheetContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

interface SheetProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  const [isOpen, setIsOpen] = useState(open || false);

  const handleSetIsOpen = (newOpen: boolean) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen: handleSetIsOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

interface SheetTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export function SheetTrigger({ children }: SheetTriggerProps) {
  const { setIsOpen } = useContext(SheetContext);

  return (
    <Pressable onPress={() => setIsOpen(true)}>
      {children}
    </Pressable>
  );
}

export function SheetClose({ children }: { children: ReactNode }) {
  const { setIsOpen } = useContext(SheetContext);

  return (
    <Pressable onPress={() => setIsOpen(false)}>
      {children}
    </Pressable>
  );
}

interface SheetContentProps {
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  style?: ViewStyle;
}

export function SheetContent({ children, side = 'right', style }: SheetContentProps) {
  const { isOpen, setIsOpen } = useContext(SheetContext);

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="slide"
      onRequestClose={() => setIsOpen(false)}
    >
      <View style={styles.overlay}>
        <Pressable
          style={styles.overlayTouchable}
          onPress={() => setIsOpen(false)}
        />
        <View style={[styles.content, styles[`content_${side}`], style]}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setIsOpen(false)}
          >
            <MaterialIcons name="close" size={24} color={Colors.text.secondary} />
          </Pressable>
          {children}
        </View>
      </View>
    </Modal>
  );
}

interface SheetHeaderProps {
  children: ReactNode;
  style?: ViewStyle;
}

export function SheetHeader({ children, style }: SheetHeaderProps) {
  return <View style={[styles.header, style]}>{children}</View>;
}

export function SheetFooter({ children, style }: SheetHeaderProps) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

interface SheetTitleProps {
  children: ReactNode;
  style?: TextStyle;
}

export function SheetTitle({ children, style }: SheetTitleProps) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export function SheetDescription({ children, style }: SheetTitleProps) {
  return <Text style={[styles.description, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  overlayTouchable: {
    flex: 1,
  },
  content: {
    backgroundColor: Colors.background.dark,
    padding: Spacing.lg,
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    maxHeight: '80%',
  },
  content_right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '75%',
    maxWidth: 400,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  content_left: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '75%',
    maxWidth: 400,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  content_top: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: BorderRadius.lg,
    borderBottomRightRadius: BorderRadius.lg,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  content_bottom: {
    // Default bottom sheet styling already applied
  },
  closeButton: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    zIndex: 10,
    padding: Spacing.xs,
  },
  header: {
    gap: Spacing.xs,
    marginBottom: Spacing.md,
  },
  footer: {
    marginTop: 'auto',
    gap: Spacing.sm,
  },
  title: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.primary,
    color: Colors.text.primary,
    fontWeight: '600',
  },
  description: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.secondary,
    color: Colors.text.secondary,
  },
});
