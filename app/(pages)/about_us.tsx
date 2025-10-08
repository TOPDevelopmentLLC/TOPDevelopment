import BasePage from "components/BasePage";
import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { useResponsive } from "hooks/useResponsive";
import { useScreenDimensions } from "hooks/useScreenDimensions";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const AboutUs = () => {
    const { pageWidth, pageHeight } = useScreenDimensions();
    const { contentWidth } = useResponsive();
    const aboutUsMessage1 = "TOP Development LLC was founded in September 2025 out of a passion for software development and a drive to solve meaningful problems. What began as an unexpected journey—starting in Pre-Law before realizing that path wasn’t the right fit—turned into a pursuit of creating solutions that truly matter. That realization led to a move to Florida, where I attended Full Sail University and earned an Associate’s Degree in Mobile Development.";
    const aboutUsMessage2 = "Over time, my skills expanded beyond mobile into web, backend, and DevOps, allowing me to build across the full stack of modern development. Today, TOP Development LLC is built on that same foundation of curiosity, adaptability, and commitment to delivering impactful software.";
    const aboutUsMessage3 = "At TOP Development LLC, our mission is simple: solve real problems with practical and lasting solutions. We take the time to analyze your unique needs, then design strategies that fit—not just for today, but for the future. By modernizing infrastructure and leveraging modern frameworks, we create solutions that are efficient, scalable, and built to grow with you. Our goal is to deliver technology that empowers, streamlines, and makes a meaningful difference.";

    return (
        <BasePage>
            <Text style={[styles.title, { marginTop: pageHeight * 0.05 }]}>About Us</Text>
            <ScrollView
                contentContainerStyle={styles.container}
                style={{ height: pageHeight * 0.9, width: pageWidth, paddingBottom: pageHeight * 0.05 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={[styles.rowContainer, { width: contentWidth, marginTop: pageHeight * 0.05, backgroundColor: Colors.background.redDark }]}>
                    <Text style={styles.subTitle}>Our Story</Text>
                    <Text style={[styles.allText, { marginTop: Spacing.lg, maxWidth: contentWidth * 0.85 }]}>{aboutUsMessage1}</Text>
                    <Text style={[styles.allText, { marginTop: Spacing.lg, maxWidth: contentWidth * 0.85 }]}>{aboutUsMessage2}</Text>
                </View>
                <View style={[styles.rowContainer, { width: contentWidth, marginTop: pageHeight * 0.05 }]}>
                    <Text style={styles.subTitle}>Our Mission</Text>
                    <Text style={[styles.allText, { marginTop: Spacing.lg, maxWidth: contentWidth * 0.85 }]}>{aboutUsMessage3}</Text>
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
        color: Colors.text.primary,
        fontWeight: 'bold',
        fontSize: FontSize.xl,
        fontFamily: FontFamily.primary,
    },
    subTitle: {
        fontSize: FontSize.lg,
        color: Colors.text.primary,
        fontFamily: FontFamily.secondary,
    },
    allText: {
        fontSize: FontSize.md,
        color: Colors.text.primary,
        flexWrap: 'wrap',
        fontFamily: FontFamily.secondary,
    },
    rowContainer: {
        alignItems: 'center',
        padding: Spacing.lg,
        borderRadius: BorderRadius.md,
    }
});

export default AboutUs;