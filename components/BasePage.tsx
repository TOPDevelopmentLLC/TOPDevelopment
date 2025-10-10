import BaseButton from "components/BaseButton";
import MenuBar from "components/MenuBar";
import { Triangle } from "components/Triangle";
import { Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from 'expo-router';
import { useScreenDimensions } from "hooks/useScreenDimensions";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

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
    const { pageWidth, pageHeight } = useScreenDimensions();
    const [initialWidth] = useState(Dimensions.get('window').width);
    const shouldShowOptionalItems = pageWidth >= initialWidth * 0.5;

    const contactUsButtonPressed = () => {
        router.push('/contact_us');
    }

    return (
        <LinearGradient
            style={styles.background}
            colors={[Colors.brand.primary, Colors.brand.black, Colors.brand.black, Colors.brand.primary]}
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
                    optionalLeftItem && shouldShowOptionalItems && (
                        <View style={styles.optionalLeftItem}>
                            <Image
                                source={require("../assets/images/top_development_logo.png")}
                                style={{ width: pageWidth * 0.025, height: pageWidth * 0.025 }}
                                contentFit="cover"
                                priority="high"
                                transition={200}
                                cachePolicy="memory-disk"
                            />
                            <Text style={styles.optionalLeftItemText}>TOP Development</Text>
                        </View>
                    )
                }
                {
                    optionalRightItem && shouldShowOptionalItems && (
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
        marginTop: Spacing.lg,
    },
    optionalLeftItem: {
        position: 'absolute',
        top: Spacing.sm,
        left: 15,
        alignItems: 'center',
        flexDirection: 'row',
        gap: Spacing.sm,
    },
    optionalLeftItemText: {
        color: Colors.text.primary,
        fontSize: FontSize.lg,
        fontFamily: FontFamily.primary,
    },
    optionalRightItem: {
        position: 'absolute',
        top: Spacing.lg,
    }
});

export default BasePage;