import BaseButton from "components/BaseButton";
import BasePage from "components/BasePage";
import Collapsible from "components/Collapsible";
import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { Image } from "expo-image";
import * as MailComposer from 'expo-mail-composer';
import { useResponsive } from "hooks/useResponsive";
import { useScreenDimensions } from "hooks/useScreenDimensions";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const Services = () => {
    const subTitleText = `TOP Development LLC is end-to-end technology solution provider specializing in web, mobile and backend development that delivers high performance, user-focused applications. Whether you're building from scratch, upgrading systems or optimizing digial presence, we deliver solutions tailored to your goals.`
    const webDevelopmentSubtext = `We design and build fast, accessible, and scalable websites that convert. From marketing sites to complex web apps, we use modern frameworks (React/Next.js, TypeScript) and a clean design system to deliver pixel-perfect UI.`;
    const mobileDevelopmentSubtext = `We design and ship high-performance iOS and Android apps that feel native and drive results. Using React Native/Expo for speed and shared code—or Swift/Kotlin when a project demands it. Releases are automated, monitored, and built to scale.`;
    const backendDevelopmentSubtext = `We design and operate secure, scalable APIs and data systems. Using Spring Boot (Java/Kotlin), we deliver clean architectures, resilient event-driven workflows, and robust data layers—built for performance, observability, and cost efficiency.`;
    const seoServiesDescription = `We help businesses increase their online visibility and attract more customers through proven SEO strategies. Specializing in optimizing websites to rank higher on search engines, ensuring your brand is found by the right audience at the right time.\n\nFrom keyword research and on-page optimization to technical SEO, link building and content strategy, we provide comprehensive solutions designed to boost traffic, improve search rankings and maximize ROI.\n\nWe stay ahead of ever-changing search algorithms so your business stays competitive in today's digital landscape. Whether you're a small business looking to grow locally or an enterprise targeting a global audience, TOP Development delivers customized SEO strategies that drive measurable results and long-term success.`
    const modernizationDescription = `We help organizations modernize their IT infrastructure to stay agile, secure and competitie in today's fast-changing digital world. Our team specializes in upgrading legacy systems, migrating workloads to the cloud, and implementing scalable, resilient architectures that support innovation and growth.\n\nFrom cloud adoption and containerization to automation, DevOps and security enhancements, we provide end-to-end infrastructure modernization solutions tailored to your business needs. By leveraging cutting-edge technologies and best practices, we ensure your infrastructure is not only efficient but also future-ready.\n\nWhether you're looking to reduce operational costs, improve performance or accelerate digital transformation, TOP Development is your trusted partner in building the foundation for tomorrow's success.`;

    const { pageWidth, pageHeight } = useScreenDimensions();
    const { isMobile, contentWidth } = useResponsive();
    const defaultMargin = pageHeight * 0.025;
    const imageSize = isMobile ? pageWidth * 0.6 : pageWidth * 0.25;

    const contactUsButtonPressed = async () => {
        //todo: fix this when email microservice is created
        //router.push('/contact_us');

        await MailComposer.composeAsync({
            recipients: ['thatoneprogrammer@gmail.com'],
        });
    }

    return (
        <BasePage>
            <Text style={[styles.title, { marginTop: pageHeight * 0.05 }]}>Our Services</Text>
            <ScrollView 
                contentContainerStyle={styles.container}
                style={{ height: pageHeight * 0.85, width: pageWidth, paddingBottom: pageHeight * 0.05 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Text style={[styles.baseText, { width: contentWidth, marginTop: defaultMargin }]}>{subTitleText}</Text>
                <View style={[styles.rowContainer, { width: contentWidth, marginTop: defaultMargin, backgroundColor: Colors.background.redDark, flexDirection: isMobile ? 'column' : 'row' }]}>
                    <View style={[styles.textContainer, { width: isMobile ? '90%' : '45%' }]}>
                        <Text style={styles.subTitle}>Software Development</Text>
                        <Collapsible
                            style={styles.collapsibles}
                            title="Web Development"
                            subtext={webDevelopmentSubtext}
                        />
                        <Collapsible
                            style={styles.collapsibles}
                            title="Mobile Development"
                            subtext={mobileDevelopmentSubtext}
                        />
                        <Collapsible
                            style={styles.collapsibles}
                            title="Backend Development"
                            subtext={backendDevelopmentSubtext}
                        />
                    </View>
                    <Image
                        source={require("../../assets/images/code.jpg")}
                        style={[styles.images, { width: imageSize, height: imageSize * 0.8, marginTop: isMobile ? defaultMargin : 0 }]}
                        contentFit="cover"
                        priority="normal"
                        transition={300}
                        cachePolicy="memory-disk"
                        recyclingKey="code-image"
                    />
                </View>

                <View style={[styles.rowContainer, { width: contentWidth, marginTop: defaultMargin, flexDirection: isMobile ? 'column-reverse' : 'row' }]}>
                    <Image
                        source={require("../../assets/images/seo.jpg")}
                        style={[styles.images, { width: imageSize, height: imageSize * 0.8, marginBottom: isMobile ? defaultMargin : 0 }]}
                        contentFit="cover"
                        priority="normal"
                        transition={300}
                        cachePolicy="memory-disk"
                        recyclingKey="seo-image"
                    />
                    <View style={[styles.textContainer, { width: isMobile ? '90%' : '45%' }]}>
                        <Text style={styles.subTitle}>SEO Services</Text>
                        <Text style={[styles.baseText, { marginTop: defaultMargin }]}>{seoServiesDescription}</Text>
                    </View>
                </View>

                <View style={[styles.rowContainer, { width: contentWidth, marginTop: defaultMargin, backgroundColor: Colors.background.redDark, flexDirection: isMobile ? 'column' : 'row' }]}>
                    <View style={[styles.textContainer, { width: isMobile ? '90%' : '45%' }]}>
                        <Text style={styles.subTitle}>Modernization</Text>
                        <Text style={[styles.baseText, { marginTop: defaultMargin }]}>{modernizationDescription}</Text>
                    </View>
                    <Image
                        source={require("../../assets/images/modernization.jpg")}
                        style={[styles.images, { width: imageSize, height: imageSize * 0.8, marginTop: isMobile ? defaultMargin : 0 }]}
                        contentFit="cover"
                        priority="normal"
                        transition={300}
                        cachePolicy="memory-disk"
                        recyclingKey="modernization-image"
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
        fontFamily: FontFamily.primary,
        fontSize: FontSize.xl,
        color: Colors.text.primary,
    },
    subTitle: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize.lg,
        color: Colors.text.primary,
        alignSelf: 'center',
    },
    baseText: {
        fontFamily: FontFamily.secondary,
        color: Colors.text.primary,
    },
    rowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: Spacing.xxl,
        padding: Spacing.lg,
        borderRadius: BorderRadius.md,
    },
    textContainer: {
        alignItems: 'center'
    },
    images: {
        borderRadius: BorderRadius.md,
    },
    collapsibles: {
        width: '85%'
    }
});

export default Services;