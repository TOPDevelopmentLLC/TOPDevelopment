import IconContainer, { IconProps } from "components/IconContainer";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";


export interface ModalHeaderProps {
    title: string;
    icon: IconProps;
}

const ModalHeader = ({
    title,
    icon,
}: ModalHeaderProps) => {

    return (
        <>
            <View style={styles.container}>
                <IconContainer iconProps={icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Divider style={styles.divider}/>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "700",
    fontFamily: 'Audiowide'
  },
  divider: {
    marginBottom: 8,
  },
});

export default ModalHeader;