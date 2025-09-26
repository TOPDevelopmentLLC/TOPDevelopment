import IconContainer, { IconType } from "components/IconContainer";
import React, { useCallback, useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type Props = {
    title: string | React.ReactNode;
    subtext: React.ReactNode;
    initiallyExpanded?: boolean;
    style?: StyleProp<ViewStyle>;
};

export default function Collapsible({
    title,
    subtext,
    initiallyExpanded = false,
    style,
}: Props) {
    const animationDuration = 220;
    const [expanded, setExpanded] = useState(initiallyExpanded);
    const [contentHeight, setContentHeight] = useState(0);

    const height = useSharedValue(initiallyExpanded ? 0 : 0);
    const rotate = useSharedValue(initiallyExpanded ? 180 : 0);
    const opacity = useSharedValue(initiallyExpanded ? 1 : 0);

    const onMeasure = useCallback(
        (e: LayoutChangeEvent) => {
        const h = Math.ceil(e.nativeEvent.layout.height);
        if (h !== contentHeight) {
            setContentHeight(h);
            if (expanded) {
            height.value = h;
            opacity.value = 1;
            }
        }
    }, [contentHeight, expanded, height, opacity]);

    useEffect(() => {
        if (!contentHeight) return;
        height.value = withTiming(expanded ? contentHeight : 0, { duration: animationDuration, easing: Easing.out(Easing.cubic) });
        opacity.value = withTiming(expanded ? 1 : 0, { duration: Math.min(160, animationDuration) });
        rotate.value = withTiming(expanded ? 180 : 0, { duration: animationDuration, easing: Easing.out(Easing.cubic) });
    }, [expanded, contentHeight, animationDuration, height, opacity, rotate]);

    const contentAnim = useAnimatedStyle(() => ({
        height: height.value,
        opacity: opacity.value,
    }));

    const chevronAnim = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotate.value}deg` }],
    }));

    return (
        <View style={[styles.container, style]}>
            <Pressable
                onPress={() => setExpanded((v) => !v)}
                style={styles.header}
                accessibilityRole="button"
                accessibilityState={{ expanded }}
            >
                {typeof title === "string" ? <Text style={styles.title}>{title}</Text> : title}
                <Animated.View style={chevronAnim}>
                    <IconContainer 
                        iconProps={{
                            name: 'chevron-down',
                            size: 24,
                            color: '#FFFFFF',
                            type: IconType.MaterialCommunityIcons
                        }} 
                    />
                </Animated.View>
            </Pressable>

            <View style={styles.measure} pointerEvents="none" onLayout={onMeasure}>
                {typeof subtext === "string" ? <Text style={styles.subtext}>{subtext}</Text> : subtext}
            </View>

            <Animated.View style={[styles.content, contentAnim]}>
                <View style={styles.innerPad}>
                    {typeof subtext === "string" ? <Text style={styles.subtext}>{subtext}</Text> : subtext}
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: '#FFFFFF',
    fontFamily: 'NotoSans'
  },
  measure: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    left: 0,
    right: 0,
  },
  content: {
    overflow: "hidden",
  },
  innerPad: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  subtext: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
    fontFamily: 'NotoSans'
  },
});
