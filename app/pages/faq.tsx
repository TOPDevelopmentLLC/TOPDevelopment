import BasePage from "components/BasePage";
import FAQList, { FAQListType } from "components/FAQList";
import { Colors, FontFamily, FontSize } from "constants/theme";
import { FAQ } from "lib/models/FAQ";
import { Dimensions, StyleSheet, Text } from "react-native";


const FAQs = () => {
    const pageWidth = Dimensions.get('window').width;
    const pageHeight = Dimensions.get('window').height;
    const questions: FAQ[] = [
        {
            question: "What services does TOP Development offer?",
            answer: "We build custom websites, mobile apps, and software systems for businesses. We also help improve your online visibility through search engine optimization and keep your existing systems running smoothly."
        },
        {
            question: "What types of businesses do you work with?",
            answer: "We work with startups, small to medium-sized businesses, and growing companies that need reliable technology partners to build or improve their digital presence."
        },
        {
            question: "How do we get started working together?",
            answer: "We'll start with a conversation to understand your needs, then review your current setup. You'll receive a clear proposal with what we'll build, how long it will take, and what it will cost."
        },
        {
            question: "How will we stay in touch during the project?",
            answer: "We'll have regular check-ins (weekly or bi-weekly) and show you working demos of what we've built at the end of each development cycle."
        },
        {
            question: "Who owns the code and intellectual property?",
            answer: "You do. Everything we build becomes yours once paid for, and all code is delivered to you in a secure code repository."
        },
        {
            question: "What if I don't have a code repository set up?",
            answer: "No problem—we'll set one up for you and give you complete access to all the code."
        },
        {
            question: "Should I build a mobile app or a mobile website?",
            answer: "We typically recommend building apps that work on both iPhone and Android to save time and money, but we can build platform-specific apps when your project needs special features."
        },
        {
            question: "Can you build the backend systems that power my app or website?",
            answer: "Yes, we build secure server-side systems that handle your data, user accounts, and business logic."
        },
        {
            question: "Do you make websites accessible for people with disabilities?",
            answer: "Yes, we follow industry standards to ensure your website works with screen readers, keyboards, and has proper color contrast for users with visual impairments."
        },
        {
            question: "What's included in your SEO services?",
            answer: "We optimize your website's technical foundation, improve individual page content, and provide recommendations to help you rank higher in search results."
        },
        {
            question: "How long does it take to see SEO results?",
            answer: "You'll typically see meaningful improvement in 3-6 months, though some technical fixes can improve your site's visibility within weeks."
        },
        {
            question: "What does it mean to modernize my existing system?",
            answer: "We update outdated technology, move systems to the cloud, set up automated testing and deployment, add monitoring, and reduce your operating costs."
        },
        {
            question: "Which cloud providers do you work with?",
            answer: "We work with Amazon Web Services (AWS) and Google Cloud Platform. We'll recommend the best fit based on your needs and budget."
        },
        {
            question: "Can you automate our software releases?",
            answer: "Yes, we set up systems that automatically test your code, check for security issues, and deploy updates safely."
        },
        {
            question: "What's included in ongoing maintenance?",
            answer: "We keep your software up to date, apply security patches, fix bugs, add small improvements, and send you monthly progress reports."
        },
        {
            question: "Do you handle app store submissions and updates?",
            answer: "Yes, we manage the entire app store process including version updates, release notes, screenshots, and gradual rollouts for both iPhone and Android."
        },
        {
            question: "Can you work with our existing development team?",
            answer: "Absolutely. We can collaborate with your in-house team with clear responsibilities and shared project planning."
        },
        {
            question: "What happens if the project scope changes?",
            answer: "We'll document the requested change, estimate how it affects timeline and cost, get your approval, and incorporate it into the next development cycle."
        }
    ]

    return (
        <BasePage>
            <Text style={[styles.title, { marginTop: pageHeight * 0.05 }]}>FAQs</Text>
            <FAQList
                style={{ width: pageWidth, height: pageHeight * 0.75, marginTop: pageHeight * 0.05 }}
                type={FAQListType.card}
                FAQs={questions}
            />
        </BasePage>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: FontSize.xl,
        fontWeight: 'bold',
        color: Colors.text.primary,
        fontFamily: FontFamily.primary,
    },
});

export default FAQs;