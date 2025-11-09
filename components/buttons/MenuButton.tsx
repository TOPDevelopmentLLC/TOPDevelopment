import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";


export interface MenuButtonProps {
    style?: StyleProp<ViewStyle>;
    text: string;
    onPress: () => void;
    active: boolean;
    isMobile?: boolean;
}

const MenuButton = ({
    style,
    text,
    onPress,
    active,
    isMobile = false,
}: MenuButtonProps) => {

    return (
        <Pressable
            style={[style, styles.container, isMobile && styles.containerMobile]}
            onPress={onPress}
            accessible={true}
            accessibilityRole={"button"}
            accessibilityLabel={text}>
            <Text style={[styles.text, isMobile && styles.textMobile, { color: active ? Colors.text.primary : Colors.text.secondary }]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
        borderRadius: BorderRadius.lg,
    },
    containerMobile: {
        paddingHorizontal: Spacing.xs,
        paddingVertical: Spacing.xs,
    },
    text: {
        fontSize: FontSize.md,
        fontFamily: FontFamily.primary,
    },
    textMobile: {
        fontSize: FontSize.xs,
    }
});

export default MenuButton;