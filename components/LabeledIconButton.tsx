import IconContainer, { IconProps } from "components/IconContainer";
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

export interface LabeledIconButtonProps {
    style?: StyleProp<ViewStyle>;
    label: string;
    iconProps: IconProps;
    onIconClicked: () => void;
}

const LabeledIconButton = ({
    style,
    label,
    iconProps,
    onIconClicked,
}: LabeledIconButtonProps) => {

    return (
        <TouchableOpacity 
            style={[style, styles.container]}
            onPress={onIconClicked}>
            <IconContainer iconProps={iconProps}/>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  container: {
    padding: 4
  },
});

export default LabeledIconButton;