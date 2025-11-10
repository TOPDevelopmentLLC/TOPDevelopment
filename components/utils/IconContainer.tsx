import {
    AntDesign,
    Feather,
    FontAwesome5,
    FontAwesome6,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons
} from "@expo/vector-icons";
import { StyleProp, View, ViewStyle } from "react-native";


export enum IconType {
    Feather = "Feather",
    Ionicons = "Ionicons",
    MaterialCommunityIcons = "MaterialCommunityIcons",
    MaterialIcons = "MaterialIcons",
    FontAwesome5 = "FontAwesome5",
    FontAwesome6 = "FontAwesome6",
    AntDesign = "AntDesign"
}

export interface IconProps {
    name: string,
    size: number,
    color: string,
    type: IconType
}

export interface IconContainerProps {
    style?: StyleProp<ViewStyle>;
    iconProps: IconProps
}

const iconMap = {
    Feather,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    AntDesign,
    FontAwesome5,
    FontAwesome6
}

const IconContainer = ({
    style,
    iconProps
}: IconContainerProps) => {
    const MappedIcon = iconMap[iconProps.type];
    return (
        <View style={style}>
            <MappedIcon name={iconProps.name} color={iconProps.color} size={iconProps.size} />
        </View>
    )
}

export default IconContainer;