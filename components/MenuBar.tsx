import MenuButton from "components/MenuButton";
import { router, usePathname } from 'expo-router';
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";


export interface MenuBarProps {
    style?: StyleProp<ViewStyle>;
}

const MenuBar = ({
    style,
}: MenuBarProps) => {
    const pathname = usePathname();

    const isHomeActive = pathname === '/pages/home';
    const homeButtonPressed = () => {
        if (!isHomeActive) router.push('/pages/home');
    }

    const isServicesActive = pathname === '/pages/services';
    const servicesButtonPressed = () => {
        if (!isServicesActive) router.push('/pages/services');
    }

    const isAboutActive = pathname === '/pages/about_us';
    const aboutButtonPressed = () => {
        if (!isAboutActive) router.push('/pages/about_us');
    }

    const isFAQActive = pathname === '/pages/faq';
    const faqButtonPressed = () => {
        if (!isFAQActive) router.push('/pages/faq');
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
        backgroundColor: '#4D4D4D',
        borderRadius: 32,
        paddingHorizontal: 10
    }
});

export default MenuBar;