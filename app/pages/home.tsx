import BasePage from "components/BasePage";
import { IconType } from "components/IconContainer";
import LabeledIcon from "components/LabeledIcon";
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
                    size: 24,
                    color: '#FFFFFF',
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
        fontSize: 48,
        color: '#FFFFFF',
        marginTop: 10,
        fontFamily: 'Audiowide'
    },
    title2: {
        fontSize: 48,
        color: '#ea2320',
        fontFamily: 'Audiowide'
    },
    subTitle: {
        marginTop: 20,
        fontFamily: 'Audiowide'
    },
    logo: {
        marginTop: 20
    }
});

export default HomePage;