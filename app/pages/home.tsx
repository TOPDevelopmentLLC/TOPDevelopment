import BasePage from "components/BasePage";
import { IconType } from "components/IconContainer";
import LabeledIcon from "components/LabeledIcon";
import { Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { Dimensions, Image, StyleSheet, Text } from "react-native";


const HomePage = () => {
    const pageWidth = Dimensions.get('window').width;
    
    return (
        <BasePage
            displayTriangle={true}
            optionalLeftItem={true}
            optionalRightItem={true}
        >
            <Text style={styles.title1}>Redefining Software</Text>
            <Text style={styles.title2}>Development</Text>
            <LabeledIcon
                style={styles.subTitle}
                label={"Pushing Production-level Code"}
                iconProps={{
                    name: 'computer',
                    size: FontSize.lg,
                    color: Colors.text.primary,
                    type: IconType.MaterialIcons
                }}
            />
            <Image
                source={require("../../assets/images/top_development_logo.png")}
                style={[styles.logo, { width: pageWidth * 0.25, height: pageWidth * 0.25 }]}
                resizeMode="contain"
            />
        </BasePage>
    )
}

const styles = StyleSheet.create({
    title1: {
        fontSize: FontSize.xl,
        color: Colors.text.primary,
        marginTop: Spacing.sm,
        fontFamily: FontFamily.primary,
    },
    title2: {
        fontSize: FontSize.xl,
        color: Colors.brand.primary,
        fontFamily: FontFamily.primary,
    },
    subTitle: {
        marginTop: Spacing.lg,
        fontFamily: FontFamily.primary,
    },
    logo: {
        marginTop: Spacing.lg,
    }
});

export default HomePage;