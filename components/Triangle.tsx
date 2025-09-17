import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type Dir = "up" | "down" | "left" | "right";

function triStyle(base: number, height: number, color: string, dir: Dir): ViewStyle {
  const common: ViewStyle = { width: 0, height: 0, backgroundColor: "transparent" };
  switch (dir) {
    case "up":
      return {
        ...common,
        borderLeftWidth: base / 2,
        borderRightWidth: base / 2,
        borderBottomWidth: height,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: color,
      };
    case "down":
      return {
        ...common,
        borderLeftWidth: base / 2,
        borderRightWidth: base / 2,
        borderTopWidth: height,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: color,
      };
    case "left":
      return {
        ...common,
        borderTopWidth: base / 2,
        borderBottomWidth: base / 2,
        borderRightWidth: height,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderRightColor: color,
      };
    case "right":
      return {
        ...common,
        borderTopWidth: base / 2,
        borderBottomWidth: base / 2,
        borderLeftWidth: height,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: color,
      };
  }
}

export function Triangle({
  base = 24,
  height = 16,
  color = "#242424",
  borderColor = "#4D4D4D",
  borderWidth = 3,
  direction = "up",
  style,
}: {
  base?: number;
  height?: number;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  direction?: Dir;
  style?: StyleProp<ViewStyle>;
}) {
  // Outer (outline)
  const outer = triStyle(base, height, borderColor, direction);

  // Inner (fill) – shrink a bit; clamp to avoid negatives
  const innerBase = Math.max(0, base - 2 * borderWidth);
  const innerHeight = Math.max(0, height - 2 * borderWidth);
  const inner = triStyle(innerBase, innerHeight, color, direction);

  // Offset inner slightly toward the triangle’s interior so the tip isn’t bare
  const offset =
    direction === "up"
      ? { top: borderWidth }
      : direction === "down"
      ? { top: -borderWidth }
      : direction === "left"
      ? { left: borderWidth }
      : { left: -borderWidth };

  return (
    <View style={[{ width: base, height: height, position: "relative", alignItems: 'center' }, style]}>
      <View style={[outer, { position: "absolute" }]} />
      <View style={[inner, { position: "absolute" }, offset]} />
    </View>
  );
}
