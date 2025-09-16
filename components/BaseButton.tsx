import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";


export interface BaseButtonProps {
    style?: StyleProp<ViewStyle>;
    text: string;
    onPress: () => void;
}

const BaseButton = ({
    style,
    text,
    onPress,
}: BaseButtonProps) => {

    return (
        <Pressable 
            style={[style, styles.container]}
            onPress={onPress}
            accessible={true}
            accessibilityRole={"button"}
            accessibilityLabel={text}>
            <Text>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ea2320',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 32,
    },
    text: {
        fontSize: 18
    }
});

export default BaseButton;