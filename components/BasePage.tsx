import { StyleProp, StyleSheet, View, ViewProps } from "react-native";

export interface BasePageProps {
    basePageStyle?: StyleProp<ViewProps>;
}

const BasePage: React.FC<React.PropsWithChildren<BasePageProps>> = ({
    basePageStyle,
    children
}) => {

    return (
        <View style={[basePageStyle, styles.container]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
});

export default BasePage;