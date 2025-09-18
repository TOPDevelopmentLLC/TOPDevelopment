import BasePage from "components/BasePage";
import FAQList, { FAQListType } from "components/FAQList";
import { FAQ } from "lib/models/FAQ";
import { Dimensions, StyleSheet, Text } from "react-native";


const FAQs = () => {
    const pageWidth = Dimensions.get('window').width;
    const pageHeight = Dimensions.get('window').height;
    const questions: FAQ[] = [
        {
            question: "What does TOP Development do?",
            answer: "We design, build, and maintain web, mobile, and backend systems, provide SEO services, and modernize infrastructure so your software is faster, more secure, and easier to evolve."
        },
        {
            question: "Who is a good fit for TOP Development?",
            answer: "Startups and SMBs that want measurable outcomes—faster delivery, lower ops cost, higher conversion—and mid-market teams that need experienced partners to extend their in-house capacity."
        },
        {
            question: "How do we get started?",
            answer: "We begin with a discovery call, then a short technical review. You’ll get a proposal with scope, timeline, pricing, and a delivery plan."
        },
        {
            question: "How do you communicate during a project?",
            answer: "Weekly (or bi-weekly) check-ins and a shared roadmap. You’ll see demos at the end of each sprint."
        },
        {
            question: "Who owns the IP and source code?",
            answer: "You do. We assign all work product to you upon payment; code is delivered in your GitHub/Bitbucket/GitLab."
        },
        {
            question: "What if we don't own a GitHub/Bitbucket/GitLab?",
            answer: "We will create you one and give you all of the source code."
        },
        {
            question: "What mobile approach do you recommend?",
            answer: "Cross-platform with React Native/Expo for speed and shared code; native (Swift/Kotlin) when a project needs deep platform-specific features."
        },
        {
            question: "What about backends and APIs?",
            answer: "We build secure APIs with Spring Boot."
        },
        {
            question: "Do you handle accessibility?",
            answer: "Yes—WCAG 2.1 AA guidelines, semantic structure, keyboard navigation, color contrast, and screen-reader testing."
        },
        {
            question: "What’s included in your SEO offering?",
            answer: "Technical SEO, on-page optimization and content recommendations."
        },
        {
            question: "How long until we see SEO results?",
            answer: "Typically 3–6 months for meaningful organic gains; technical fixes can improve crawlability within weeks."
        },
        {
            question: "What does “modernization” include?",
            answer: "Cloud migration, containerization, serverless where it fits, CI/CD, monitoring and cost optimization."
        },
        {
            question: "Which clouds do you support?",
            answer: "AWS (Amazon Web Services) and GCP (Google Cloud Platform). We recommend based on your stack, compliance needs, and existing contracts."
        },
        {
            question: "Do you set up CI/CD?",
            answer: "Yes—GitHub Actions with build, test, security scanning, artifacting, and automated deploys."
        },
        {
            question: "What’s included in maintenance?",
            answer: "Dependency and platform updates, security patches, bug fixes, small enhancements and monthly reports."
        },
        {
            question: "Do you handle app store updates?",
            answer: "Yes—versioning, release notes, screenshots, and phased rollouts for iOS and Android."
        },
        {
            question: "Can you work alongside our team post-launch?",
            answer: "Absolutely—shared backlog, joint sprints, and clear ownership boundaries."
        },
        {
            question: "How do you manage scope changes?",
            answer: "We document the change, estimate impact, and get written approval before implementation, then add the changes to the next sprint cycle."
        }
    ]

    return (
        <BasePage>
            <Text style={[styles.title, { marginTop: pageHeight * 0.05 }]}>FAQs</Text>
            <FAQList 
                style={{ width: pageWidth * 0.4, height: pageHeight * 0.75, marginTop: pageHeight * 0.05 }}
                type={FAQListType.card} 
                FAQs={questions} 
            />
        </BasePage>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Audiowide'
    },
});

export default FAQs;