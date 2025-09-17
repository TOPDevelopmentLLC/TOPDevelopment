import BasePage from "components/BasePage";
import { Dimensions, StyleSheet, Text } from "react-native";


const AboutUs = () => {
    const pageWidth = Dimensions.get('window').width;
    const pageHeight = Dimensions.get('window').height;
    const aboutUsMessage1 = "TOP Development was founded in September 2025 because of my passion for software development and solving problems. The desire to improve functions and processes that slowed progress or could improve lives has always been there since I was young.";
    const aboutUsMessage2 = "I have experience in a widespread of industries such as fintech with BNY Mellon, medical staffing solutions with True Helix, Bluetooth-enabled inventory management system with Smart Label Solutions and a classroom record-keeping system designed to track the progress of students and enhance learning outcomes with JarvisEd. Each project has sharpened my skills and I wanted to bring those skills to bring measurable growth to businesses that need it the most.";
    const aboutUsMessage3 = "At TOP Development, programming isn't just our job -- it's our passion, our craft, our way of making an impact and a better future. Let's see how we can do it together!";

    return (
        <BasePage>
            <Text style={[styles.title, { marginTop: pageHeight * 0.1 }]}>About Us</Text>
            <Text style={[styles.allText, { marginTop: pageHeight * 0.1, width: pageWidth * 0.4 }]}>{aboutUsMessage1}</Text>
            <Text style={[styles.allText, { marginTop: 20, width: pageWidth * 0.4 }]}>{aboutUsMessage2}</Text>
            <Text style={[styles.allText, { marginTop: 20, width: pageWidth * 0.4 }]}>{aboutUsMessage3}</Text>
        </BasePage>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 48,
    },
    allText: {
        fontSize: 18,
        color: '#FFFFFF',
        flexWrap: 'wrap',
    },
});

export default AboutUs;