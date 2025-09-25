import BasePage from "components/BasePage";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";


const AboutUs = () => {
    const pageWidth = Dimensions.get('window').width;
    const componentWidth = pageWidth * 0.6;
    const pageHeight = Dimensions.get('window').height;
    const aboutUsMessage1 = "TOP Development LLC was founded in September 2025 out of a passion for software development and a drive to solve meaningful problems. What began as an unexpected journey—starting in Pre-Law before realizing that path wasn’t the right fit—turned into a pursuit of creating solutions that truly matter. That realization led to a move to Florida, where I attended Full Sail University and earned an Associate’s Degree in Mobile Development.";
    const aboutUsMessage2 = "Over time, my skills expanded beyond mobile into web, backend, and DevOps, allowing me to build across the full stack of modern development. Today, TOP Development LLC is built on that same foundation of curiosity, adaptability, and commitment to delivering impactful software.";
    const aboutUsMessage3 = "At TOP Development LLC, our mission is simple: solve real problems with practical and lasting solutions. We take the time to analyze your unique needs, then design strategies that fit—not just for today, but for the future. By modernizing infrastructure and leveraging modern frameworks, we create solutions that are efficient, scalable, and built to grow with you. Our goal is to deliver technology that empowers, streamlines, and makes a meaningful difference.";

    return (
        <BasePage>
            <ScrollView
                contentContainerStyle={styles.container}
                style={{ height: pageHeight * 0.95, width: pageWidth, paddingBottom: pageHeight * 0.05 }}
            >
                <Text style={[styles.title, { marginTop: pageHeight * 0.1 }]}>About Us</Text>
                <View style={[styles.rowContainer, { width: componentWidth, marginTop: pageHeight * 0.05, backgroundColor: '#ea2320' }]}>
                    <Text style={[styles.subTitle, {  }]}>Our Story</Text>
                    <Text style={[styles.allText, { marginTop: 20, width: pageWidth * 0.4 }]}>{aboutUsMessage1}</Text>
                    <Text style={[styles.allText, { marginTop: 20, width: pageWidth * 0.4 }]}>{aboutUsMessage2}</Text>
                </View>
                <View style={[styles.rowContainer, { width: componentWidth, marginTop: pageHeight * 0.05 }]}>
                    <Text style={styles.subTitle}>Our Mission</Text>
                    <Text style={[styles.allText, { marginTop: 20, width: pageWidth * 0.4 }]}>{aboutUsMessage3}</Text>
                </View>
            </ScrollView>
        </BasePage>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 48,
        fontFamily: 'Audiowide'
    },
    subTitle: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: 'Audiowide'
    },
    allText: {
        fontSize: 18,
        color: '#FFFFFF',
        flexWrap: 'wrap',
        fontFamily: 'Audiowide'
    },
    rowContainer: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 16
    }
});

export default AboutUs;