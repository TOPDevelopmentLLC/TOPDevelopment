import BaseButton from "components/BaseButton";
import MenuBar from "components/MenuBar";
import { Triangle } from "components/Triangle";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export interface BasePageProps {
    displayTriangle?: boolean;
    optionalLeftItem?: boolean;
    optionalRightItem?: boolean;
}

const BasePage: React.FC<React.PropsWithChildren<BasePageProps>> = ({
    children,
    displayTriangle = false,
    optionalLeftItem = false,
    optionalRightItem = false,
}) => {
    const pageWidth = Dimensions.get('window').width;
    const pageHeight = Dimensions.get('window').height;

    const contactUsButtonPressed = () => {
        router.push('/pages/contact_us');
    }

    return (
        <LinearGradient 
            style={styles.background}
            colors={['#ea2320', '#000000', '#000000', '#ea2320']}
            locations={[0, 0.01, 0.99, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
                <View style={styles.container}>
                    {
                        displayTriangle && (
                            <Triangle
                                style={styles.backgroundTriangle} 
                                direction="down" 
                                height={pageHeight}
                                base={pageWidth * 0.9}
                            />
                        )
                    }
                    <MenuBar style={styles.menuBar} />
                    {children}
                </View>
                {
                    optionalLeftItem && (
                        <View style={styles.optionalLeftItem}>
                            <Image 
                                source={require("../assets/images/top_development_logo.png")} 
                                style={{ width: pageWidth * 0.025, height: pageWidth * 0.025 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.optionalLeftItemText}>TOP Development</Text>
                        </View>
                    )
                }
                {
                    optionalRightItem && (
                        <BaseButton 
                            style={[styles.optionalRightItem, { right: pageWidth * 0.1 }]} 
                            text={"Contact Us"} 
                            onPress={contactUsButtonPressed} 
                        />
                    )
                }
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    background: {
        flex: 1,
    },
    backgroundTriangle: {
        position: 'absolute',
    },
    menuBar: {
        marginTop: 20
    },
    optionalLeftItem: {
        position: 'absolute',
        top: 10,
        left: 15,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    optionalLeftItemText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'Audiowide'
    },
    optionalRightItem: {
        position: 'absolute',
        top: 20,
    }
});

export default BasePage;