import IconContainer, { IconProps } from "components/IconContainer";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export interface LabeledIconProps {
    style?: StyleProp<ViewStyle>;
    label: string;
    iconProps: IconProps;
}

const LabeledIcon = ({
    style,
    label,
    iconProps,
}: LabeledIconProps) => {

    return (
        <View style={[style, styles.container]}>
            <IconContainer iconProps={iconProps}/>
            <Text style={styles.text}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
    }
});

export default LabeledIcon;