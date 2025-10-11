import BaseButton from "components/BaseButton";
import BasePage from "components/BasePage";
import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { router } from "expo-router";
import { useResponsive } from "hooks/useResponsive";
import { useScreenDimensions } from "hooks/useScreenDimensions";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const Pricing = () => {
    const { pageWidth, pageHeight } = useScreenDimensions();
    const { isMobile, contentWidth } = useResponsive();
    const defaultMargin = pageHeight * 0.025;
    const contactUsButtonPressed = () => {
        router.push('/contact_us');
    }

    return (
        <BasePage>
            <Text style={[styles.title, { marginTop: pageHeight * 0.05 }]}>Pricing</Text>
            <ScrollView
                contentContainerStyle={[styles.container, { paddingBottom: pageHeight * 0.1 }]}
                style={{ height: pageHeight * 0.9, width: pageWidth }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                {/* Build Pricing Section */}
                <View style={[styles.sectionContainer, { width: contentWidth, marginTop: defaultMargin }]}>
                    <Text style={styles.sectionTitle}>Website Builds</Text>

                    <View style={[styles.pricingGrid, { maxWidth: contentWidth }]}>
                        {/* Simple Landing Page */}
                        <View style={styles.pricingCard}>
                            <Text style={styles.tierTitle}>Simple Landing Page</Text>
                            <Text style={styles.price}>$1,000 - $1,500</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.feature}>• 1-3 pages (Home, About, Contact)</Text>
                                <Text style={styles.feature}>• Responsive Design</Text>
                                <Text style={styles.feature}>• Contact Form with Email Notifications</Text>
                                <Text style={styles.feature}>• Optimized Images</Text>
                                <Text style={styles.feature}>• {`< 3 second load times`}</Text>
                                <Text style={styles.feature}>• SEO Basics</Text>
                                <Text style={styles.feature}>• Hosting Setup</Text>
                                <Text style={styles.feature}>• Domain Setup</Text>
                                <Text style={styles.feature}>• Design Revisions (3 rounds)</Text>
                            </View>
                        </View>

                        {/* Small Business Site */}
                        <View style={styles.pricingCard}>
                            <Text style={styles.tierTitle}>Small Business Site</Text>
                            <Text style={styles.price}>$3,000 - $4,000</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.featureHighlight}>Everything from Simple Landing Page</Text>
                                <Text style={styles.feature}>• 5-10 pages</Text>
                                <Text style={styles.feature}>• Dynamic Drawer Menu</Text>
                                <Text style={styles.feature}>• Contact Us Forms</Text>
                                <Text style={styles.feature}>• Service Inquiry Forms</Text>
                                <Text style={styles.feature}>• Newsletter Signup Forms</Text>
                                <Text style={styles.feature}>• CMS Plugin</Text>
                                <Text style={styles.feature}>• Custom CMS</Text>
                                <Text style={styles.feature}>• Google Maps Integration</Text>
                                <Text style={styles.feature}>• Design Revisions (5 rounds)</Text>
                            </View>
                        </View>

                        {/* Advanced/Custom Site */}
                        <View style={[styles.pricingCard, styles.highlightedCard]}>
                            <Text style={styles.tierTitle}>Advanced/Custom Site</Text>
                            <Text style={styles.price}>$5,000 - $15,000</Text>
                            <Text style={styles.price}>{`(Recommended)`}</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.featureHighlight}>Everything from Small Business Website</Text>
                                <Text style={styles.feature}>• 10-25 pages with complex architecture</Text>
                                <Text style={styles.feature}>• User Authentication</Text>
                                <Text style={styles.feature}>• User Dashboards/Profiles</Text>
                                <Text style={styles.feature}>• Advanced Search/Filtering</Text>
                                <Text style={styles.feature}>• API Integrations</Text>
                                <Text style={styles.feature}>• Document Management System</Text>
                                <Text style={styles.feature}>• Unlimited Custom forms</Text>
                                <Text style={styles.feature}>• CRM Integration (HubSpot, Salesforce, etc)</Text>
                                <Text style={styles.feature}>• Payment Processing (Stripe/PayPal)</Text>
                                <Text style={styles.feature}>• Social Media API Integrations</Text>
                            </View>
                        </View>

                        {/* Enterprise Site */}
                        <View style={styles.pricingCard}>
                            <Text style={styles.tierTitle}>Enterprise Site</Text>
                            <Text style={styles.price}>$15,000 - $75,000</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.featureHighlight}>Everything from Advanced/Custom Website</Text>
                                <Text style={styles.feature}>• Multi-Site architecture or site network</Text>
                                <Text style={styles.feature}>• Complex database architecture</Text>
                                <Text style={styles.feature}>• Advanced API development</Text>
                                <Text style={styles.feature}>• Real-time features (notifications/live updates)</Text>
                                <Text style={styles.feature}>• Data visualization and custom reporting</Text>
                                <Text style={styles.feature}>• Document generation (invoices, contracts, reports)</Text>
                                <Text style={styles.feature}>• ERP systems (SAP, Oracle, NetSuite)</Text>
                                <Text style={styles.feature}>• CRM (Salesforce, Microsoft Dynamics)</Text>
                                <Text style={styles.feature}>• Custom legacy system integrations</Text>
                                <Text style={styles.feature}>• HR systems integration</Text>
                                <Text style={styles.feature}>• Microservices architecture</Text>
                                <Text style={styles.feature}>• Auto-scaling infrastructure</Text>
                                <Text style={styles.feature}>• Load balancing</Text>
                                <Text style={styles.feature}>• Staging/prod environments</Text>
                                <Text style={styles.feature}>• Monthly strategy calls</Text>
                            </View>
                        </View>

                        {/* E-Commerce Site */}
                        <View style={styles.pricingCard}>
                            <Text style={styles.tierTitle}>E-Commerce Site</Text>
                            <Text style={styles.price}>$7,500 - $20,000</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.feature}>• Up to 500 SKUs</Text>
                                <Text style={styles.featureNote}>  (+$500 for every 100 SKUs after 500)</Text>
                                <Text style={styles.feature}>• Product Category/Details Pages</Text>
                                <Text style={styles.feature}>• Cart/Checkout Pages</Text>
                                <Text style={styles.feature}>• Shipping/Returns Policy Pages</Text>
                                <Text style={styles.feature}>• Blog Pages</Text>
                                <Text style={styles.feature}>• Real-time inventory tracking</Text>
                                <Text style={styles.feature}>• Low stock alerts</Text>
                                <Text style={styles.feature}>• Order processing and status updates</Text>
                                <Text style={styles.feature}>• Order history</Text>
                                <Text style={styles.feature}>• Wishlists</Text>
                                <Text style={styles.feature}>• Email notifications</Text>
                                <Text style={styles.feature}>• Customer reviews and ratings</Text>
                                <Text style={styles.feature}>• Newsletter signup</Text>
                                <Text style={styles.feature}>• Gift card functionality</Text>
                                <Text style={styles.feature}>• Stripe/PayPal Integration</Text>
                                <Text style={styles.feature}>• Tax Calculation (TaxJar Integration)</Text>
                                <Text style={styles.feature}>• Shipping Calculator</Text>
                                <Text style={styles.feature}>• International Shipping Support</Text>
                                <Text style={styles.feature}>• Guest Checkout</Text>
                                <Text style={styles.feature}>• Design Revisions (5 rounds)</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Simple Add-ons Section */}
                <View style={[styles.sectionContainer, { width: contentWidth, marginTop: defaultMargin * 2 }]}>
                    <Text style={styles.sectionTitle}>Simple Add-Ons</Text>
                    <View style={[styles.addonsGrid, { maxWidth: contentWidth }]}>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Additional Support Hours</Text>
                            <Text style={styles.addonPrice}>$125/hour</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Live-chat Integration</Text>
                            <Text style={styles.addonPrice}>$500</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Advanced Animations</Text>
                            <Text style={styles.addonPrice}>$500</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Appointment Booking</Text>
                            <Text style={styles.addonPrice}>$1,000</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Member Portal</Text>
                            <Text style={styles.addonPrice}>$2,000</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Custom Admin Panel</Text>
                            <Text style={styles.addonPrice}>$2,000</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Loyalty/Rewards Program</Text>
                            <Text style={styles.addonPrice}>$2,000</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Mobile Application</Text>
                            <Text style={styles.addonPrice}>$2,000+</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Multi-Currency Support</Text>
                            <Text style={styles.addonPrice}>$2,500</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Subscriptions/Recurring Payments</Text>
                            <Text style={styles.addonPrice}>$2,500</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Third-Party API Development</Text>
                            <Text style={styles.addonPrice}>$4,000</Text>
                        </View>
                        <View style={styles.addonCard}>
                            <Text style={styles.addonName}>Multi-Vendor Marketplace</Text>
                            <Text style={styles.addonPrice}>$7,500</Text>
                        </View>
                    </View>
                </View>

                {/* Maintenance Pricing Section */}
                <View style={[styles.sectionContainer, { width: contentWidth, marginTop: defaultMargin * 2, marginBottom: defaultMargin * 2 }]}>
                    <Text style={styles.sectionTitle}>Maintenance & Support</Text>

                    <View style={[styles.maintenanceGrid, { maxWidth: contentWidth }]}>
                        {/* Essentials Only */}
                        <View style={styles.maintenanceCard}>
                            <Text style={styles.tierTitle}>Essentials Only</Text>
                            <Text style={styles.price}>$50/month</Text>
                            <Text style={styles.annualPrice}>$510/annually</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.feature}>• AWS Hosting</Text>
                                <Text style={styles.feature}>• Security Monitoring</Text>
                                <Text style={styles.feature}>• Monthly Uptime Reports</Text>
                                <Text style={styles.feature}>• 2 Hours of Minor Updates/Support per month</Text>
                                <Text style={styles.feature}>• SSL Certificate Management</Text>
                            </View>
                        </View>

                        {/* Basic */}
                        <View style={styles.maintenanceCard}>
                            <Text style={styles.tierTitle}>Basic</Text>
                            <Text style={styles.price}>$100/month</Text>
                            <Text style={styles.annualPrice}>$1,080/annually</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.featureHighlight}>Everything in Essentials Only</Text>
                                <Text style={styles.feature}>• 5 Hours of Minor Updates/Support per month</Text>
                                <Text style={styles.feature}>• Plugin/Dependency Updates</Text>
                                <Text style={styles.feature}>• Monthly Security Scans</Text>
                                <Text style={styles.feature}>• Monthly Performance Optimization</Text>
                                <Text style={styles.feature}>• Google Analytics</Text>
                            </View>
                        </View>

                        {/* Professional */}
                        <View style={[styles.maintenanceCard, styles.highlightedCard]}>
                            <Text style={styles.tierTitle}>Professional</Text>
                            <Text style={styles.price}>$300/month</Text>
                            <Text style={styles.annualPrice}>$3,240/annually</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.featureHighlight}>Everything in Basic</Text>
                                <Text style={styles.feature}>• 10 Hours of Minor Updates/Support per month</Text>
                                <Text style={styles.feature}>• Priority Email Support</Text>
                                <Text style={styles.feature}>• Quarterly Strategy Consulting</Text>
                                <Text style={styles.feature}>• Bi-Weekly Security Scans</Text>
                                <Text style={styles.feature}>• Bi-Weekly Performance Optimization</Text>
                            </View>
                        </View>

                        {/* Enterprise */}
                        <View style={styles.maintenanceCard}>
                            <Text style={styles.tierTitle}>Enterprise</Text>
                            <Text style={styles.price}>$600 - $2,500/month</Text>
                            <Text style={styles.annualPrice}>$6,120 - $25,500/annually</Text>
                            <View style={styles.featuresList}>
                                <Text style={styles.featureHighlight}>Everything in Professional</Text>
                                <Text style={styles.feature}>• 24/7 Security Monitoring</Text>
                                <Text style={styles.feature}>• 25+ Hours of Development Support per month</Text>
                                <Text style={styles.feature}>• A/B Testing Implementation</Text>
                                <Text style={styles.feature}>• Scalability Planning</Text>
                                <Text style={styles.feature}>• Infrastructure Optimization</Text>
                                <Text style={styles.feature}>• Disaster Recovery Planning</Text>
                                <Text style={styles.feature}>• Monthly Strategy Consulting</Text>
                                <Text style={styles.featureNote}>  Optional: Dedicated Account Manager</Text>
                            </View>
                        </View>
                    </View>
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
    sectionContainer: {
        alignItems: 'center',
    },
    sectionTitle: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.lg,
        color: Colors.brand.primary,
        marginBottom: Spacing.lg,
    },
    pricingGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.lg,
        justifyContent: 'center',
    },
    pricingCard: {
        backgroundColor: Colors.background.gray,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        width: '100%',
        maxWidth: 450,
        flex: 1,
        minWidth: 280,
    },
    highlightedCard: {
        backgroundColor: Colors.background.redDark,
        borderWidth: 2,
        borderColor: Colors.brand.primary,
    },
    tierTitle: {
        fontFamily: FontFamily.primary,
        fontSize: FontSize.md,
        color: Colors.text.primary,
        marginBottom: Spacing.sm,
        textAlign: 'center',
    },
    price: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize.lg,
        color: Colors.brand.primary,
        marginBottom: Spacing.md,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    featuresList: {
        gap: Spacing.xs,
    },
    feature: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize.sm,
        color: Colors.text.primary,
    },
    featureHighlight: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize.sm,
        color: Colors.brand.primary,
        fontWeight: 'bold',
        marginBottom: Spacing.xs,
    },
    featureNote: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize.xs,
        color: Colors.text.secondary,
        fontStyle: 'italic',
    },
    addonsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.md,
        justifyContent: 'center',
    },
    addonCard: {
        backgroundColor: Colors.background.gray,
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        minWidth: 160,
        flex: 1,
        maxWidth: 220,
        alignItems: 'center',
    },
    addonName: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize.sm,
        color: Colors.text.primary,
        marginBottom: Spacing.xs,
        textAlign: 'center',
    },
    addonPrice: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize.md,
        color: Colors.brand.primary,
        fontWeight: 'bold',
    },
    maintenanceGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.lg,
        justifyContent: 'center',
    },
    maintenanceCard: {
        backgroundColor: Colors.background.gray,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        width: '100%',
        maxWidth: 450,
        flex: 1,
        minWidth: 280,
    },
    annualPrice: {
        fontFamily: FontFamily.secondary,
        fontSize: FontSize.sm,
        color: Colors.text.secondary,
        marginBottom: Spacing.md,
        textAlign: 'center',
    },
});

export default Pricing;
