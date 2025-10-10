import MenuButton from "components/MenuButton";
import { BorderRadius, Colors, Spacing } from "constants/theme";
import { router, usePathname } from 'expo-router';
import { useScreenDimensions } from "hooks/useScreenDimensions";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";


export interface MenuBarProps {
    style?: StyleProp<ViewStyle>;
}

const MenuBar = ({
    style,
}: MenuBarProps) => {
    const pathname = usePathname();
    const { pageWidth } = useScreenDimensions();
    const isMobile = pageWidth < 768;

    const isHomeActive = pathname === '/home';
    const homeButtonPressed = () => {
        if (!isHomeActive) router.push('/home');
    }

    const isServicesActive = pathname === '/services';
    const servicesButtonPressed = () => {
        if (!isServicesActive) router.push('/services');
    }

    const isAboutActive = pathname === '/about_us';
    const aboutButtonPressed = () => {
        if (!isAboutActive) router.push('/about_us');
    }

    const isFAQActive = pathname === '/faq';
    const faqButtonPressed = () => {
        if (!isFAQActive) router.push('/faq');
    }

    const isPricingActive = pathname === '/pricing';
    const pricingButtonPressed = () => {
        if (!isPricingActive) router.push('/pricing');
    }

    return (
        <View style={[style, styles.container, isMobile && styles.containerMobile]}>
            <MenuButton
                text={"Home"}
                onPress={homeButtonPressed}
                active={isHomeActive}
                isMobile={isMobile}
            />
            <MenuButton
                text={"Services"}
                onPress={servicesButtonPressed}
                active={isServicesActive}
                isMobile={isMobile}
            />
            <MenuButton
                text={"Pricing"}
                onPress={pricingButtonPressed}
                active={isPricingActive}
                isMobile={isMobile}
            />
            <MenuButton
                text={"About"}
                onPress={aboutButtonPressed}
                active={isAboutActive}
                isMobile={isMobile}
            />
            <MenuButton
                text={"FAQs"}
                onPress={faqButtonPressed}
                active={isFAQActive}
                isMobile={isMobile}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.background.gray,
        borderRadius: BorderRadius.lg,
        paddingHorizontal: Spacing.sm,
    },
    containerMobile: {
        paddingHorizontal: Spacing.xs,
    }
});

export default MenuBar;