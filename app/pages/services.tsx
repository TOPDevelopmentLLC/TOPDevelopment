import BaseButton from "components/BaseButton";
import BasePage from "components/BasePage";
import Collapsible from "components/Collapsible";
import * as MailComposer from 'expo-mail-composer';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";


const Services = () => {
    const subTitleText = `TOP Development LLC is end-to-end technology solution provider specializing in web, mobile and backend development that delivers high performance, user-focused applications. Whether you're building from scratch, upgrading systems or optimizing digial presence, we deliver solutions tailored to your goals.`
    const webDevelopmentSubtext = `We design and build fast, accessible, and scalable websites that convert. From marketing sites to complex web apps, we use modern frameworks (React/Next.js, TypeScript) and a clean design system to deliver pixel-perfect UI.`;
    const mobileDevelopmentSubtext = `We design and ship high-performance iOS and Android apps that feel native and drive results. Using React Native/Expo for speed and shared code—or Swift/Kotlin when a project demands it. Releases are automated, monitored, and built to scale.`;
    const backendDevelopmentSubtext = `We design and operate secure, scalable APIs and data systems. Using Spring Boot (Java/Kotlin), we deliver clean architectures, resilient event-driven workflows, and robust data layers—built for performance, observability, and cost efficiency.`;
    const seoServiesDescription = `We help businesses increase their online visibility and attract more customers through proven SEO strategies. Specializing in optimizing websites to rank higher on search engines, ensuring your brand is found by the right audience at the right time.\n\nFrom keyword research and on-page optimization to technical SEO, link building and content strategy, we provide comprehensive solutions designed to boost traffic, improve search rankings and maximize ROI. We stay ahead of ever-changing search algorithms so your business stays competitive in today's digital landscape.\n\nWhether you're a small business looking to grow locally or an enterprise targeting a global audience, TOP Development delivers customized SEO strategies that drive measurable results and long-term success.`
    const modernizationDescription = `We help organizations modernize their IT infrastructure to stay agile, secure and competitie in today's fast-changing digital world. Our team specializes in upgrading legacy systems, migrating workloads to the cloud, and implementing scalable, resilient architectures that support innovation and growth.\n\nFrom cloud adoption and containerization to automation, DevOps and security enhancements, we provide end-to-end infrastructure modernization solutions tailored to your business needs. By leveraging cutting-edge technologies and best practices, we ensure your infrastructure is not only efficient but also future-ready.\n\nWhether you're looking to reduce operational costs, improve performance or accelerate digital transformation, TOP Development is your trusted partner in building the foundation for tomorrow's success.`;
    
    const pageWidth = Dimensions.get('window').width;
    const componentWidth = pageWidth * 0.6;
    const pageHeight = Dimensions.get('window').height;
    const defaultMargin = pageHeight * 0.025;

    const contactUsButtonPressed = async () => {
        //todo: fix this when email microservice is created
        //router.push('/pages/contact_us');

        await MailComposer.composeAsync({
            recipients: ['thatoneprogrammer@gmail.com'],
        });
    }

    return (
        <BasePage>
            <ScrollView 
                contentContainerStyle={styles.container}
                style={{ height: pageHeight * 0.9 }}
            >
            <Text style={[styles.title, { marginTop: pageHeight * 0.05 }]}>Our Services</Text>
            <Text style={[styles.baseText, { width: componentWidth, marginTop: defaultMargin }]}>{subTitleText}</Text>
            <View style={[styles.rowContainer, { width: componentWidth, marginTop: defaultMargin }]}>
                <View>
                    <Text style={styles.subTitle}>Software Development</Text>
                    <Collapsible
                        style={{ width: pageWidth * 0.2 }}
                        title="Web Development"
                        subtext={webDevelopmentSubtext}
                    />
                    <Collapsible
                        style={{ width: pageWidth * 0.2 }}
                        title="Mobile Development"
                        subtext={mobileDevelopmentSubtext}
                    />
                    <Collapsible
                        style={{ width: pageWidth * 0.2 }}
                        title="Backend Development"
                        subtext={backendDevelopmentSubtext}
                    />
                </View>
                <Image 
                    source={require("../../assets/images/code.jpg")} 
                    style={{ width: pageWidth * 0.25, height: pageWidth * 0.2 }}
                    resizeMode="contain"
                />
            </View>

            <View style={[styles.rowContainer, { width: componentWidth, marginTop: defaultMargin }]}>
                <Image 
                    source={require("../../assets/images/seo.jpg")} 
                    style={{ width: pageWidth * 0.25, height: pageWidth * 0.2 }}
                    resizeMode="contain"
                />
                <View>
                    <Text style={styles.subTitle}>SEO Services</Text>
                    <Text style={[styles.baseText, { marginTop: defaultMargin, width: pageWidth * 0.3 }]}>{seoServiesDescription}</Text>
                </View>
            </View>
            <View style={[styles.rowContainer, { width: componentWidth, marginTop: defaultMargin }]}>
                <View>
                    <Text style={styles.subTitle}>Modernization</Text>
                    <Text style={[styles.baseText, { marginTop: defaultMargin, width: pageWidth * 0.3 }]}>{modernizationDescription}</Text>
                </View>
                <Image 
                    source={require("../../assets/images/modernization.jpg")} 
                    style={{ width: pageWidth * 0.25, height: pageWidth * 0.2 }}
                    resizeMode="contain"
                />
            </View>
            <Text style={[styles.subTitle, { marginTop: defaultMargin }]}>Interested to learn more?</Text>
            <BaseButton 
                style={{ marginTop: defaultMargin }}
                text={"Contact Us"} 
                onPress={contactUsButtonPressed} 
            />
        </ScrollView>
        </BasePage>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Audiowide',
        fontSize: 48,
        color: '#FFFFFF'
    },
    subTitle: {
        fontFamily: 'Audiowide',
        fontSize: 24,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    baseText: {
        fontFamily: 'Audiowide',
        color: '#FFFFFF'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    }
});

export default Services;