import IconContainer, { IconProps } from "components/IconContainer";
import { Colors, FontFamily, Spacing } from "constants/theme";
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
        padding: Spacing.xs,
        flexDirection: 'row',
        gap: Spacing.md,
        alignItems: 'center',
    },
    text: {
        color: Colors.text.primary,
        fontFamily: FontFamily.primary,
    }
});

export default LabeledIcon;