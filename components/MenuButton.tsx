import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";


export interface MenuButtonProps {
    style?: StyleProp<ViewStyle>;
    text: string;
    onPress: () => void;
    active: boolean;
}

const MenuButton = ({
    style,
    text,
    onPress,
    active,
}: MenuButtonProps) => {

    return (
        <Pressable
            style={[style, styles.container]}
            onPress={onPress}
            accessible={true}
            accessibilityRole={"button"}
            accessibilityLabel={text}>
            <Text style={[styles.text, { color: active ? Colors.text.primary : Colors.text.secondary }]}>{text}</Text>
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
    text: {
        fontSize: FontSize.md,
        fontFamily: FontFamily.primary,
    }
});

export default MenuButton;