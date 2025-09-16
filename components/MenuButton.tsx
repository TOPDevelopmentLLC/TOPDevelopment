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
            <Text style={{ color: active ? '#FFFFFF' : '#B4B4B4' }}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 32,
    },
    text: {
        fontSize: 18
    }
});

export default MenuButton;