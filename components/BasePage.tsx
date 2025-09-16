import MenuBar from "components/MenuBar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

const BasePage: React.FC<React.PropsWithChildren> = ({
    children
}) => {

    return (
        <LinearGradient 
            style={styles.background}
            colors={['#ea2320', '#000000', '#000000', '#ea2320']}
            locations={[0, 0.01, 0.99, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
                <View style={styles.container}>
                    <MenuBar style={styles.menuBar} />
                    {children}
                </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    background: {
        flex: 1,
    },
    menuBar: {
        marginTop: 20
    },
    optionalLeftItem: {
        position: 'absolute',
    },
    optionalRightItem: {
        position: 'absolute'
    }
});

export default BasePage;