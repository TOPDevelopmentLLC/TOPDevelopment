import MenuButton from "components/MenuButton";
import { BorderRadius, Colors, Spacing } from "constants/theme";
import { router, usePathname } from 'expo-router';
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";


export interface MenuBarProps {
    style?: StyleProp<ViewStyle>;
}

const MenuBar = ({
    style,
}: MenuBarProps) => {
    const pathname = usePathname();

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
        <View style={[style, styles.container]}>
            <MenuButton
                text={"Home"}
                onPress={homeButtonPressed}
                active={isHomeActive}
            />
            <MenuButton
                text={"Services"}
                onPress={servicesButtonPressed}
                active={isServicesActive}
            />
            <MenuButton
                text={"Pricing"}
                onPress={pricingButtonPressed}
                active={isPricingActive}
            />
            <MenuButton
                text={"About"}
                onPress={aboutButtonPressed}
                active={isAboutActive}
            />
            <MenuButton
                text={"FAQs"}
                onPress={faqButtonPressed}
                active={isFAQActive}
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
    }
});

export default MenuBar;