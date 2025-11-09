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
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8c1513',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 32,
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'NotoSans'
    }
});

export default BaseButton;