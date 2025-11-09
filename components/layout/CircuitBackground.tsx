import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, Pattern, Circle, RadialGradient, Stop, Rect, Line, Polygon } from 'react-native-svg';
import { Colors } from 'constants/theme';

export function CircuitBackground() {
  return (
    <View style={styles.container} pointerEvents="none">
      {/* Dot Grid Pattern */}
      <Svg width="100%" height="100%" style={styles.dotGrid}>
        <Defs>
          <Pattern
            id="dotGrid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <Circle cx="20" cy="20" r="1" fill={Colors.brand.primary} opacity="0.3" />
          </Pattern>

          <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={Colors.brand.primary} stopOpacity="0.8" />
            <Stop offset="100%" stopColor={Colors.brand.primary} stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#dotGrid)" />
      </Svg>

      {/* Network Lines and Nodes */}
      <Svg width="100%" height="100%" style={styles.network}>
        <Defs>
          <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={Colors.brand.primary} stopOpacity="0.8" />
            <Stop offset="100%" stopColor={Colors.brand.primary} stopOpacity="0" />
          </RadialGradient>
        </Defs>

        {/* Connection lines creating a network pattern */}
        <Line x1="10%" y1="20%" x2="30%" y2="15%" stroke={Colors.brand.primary} strokeWidth="1" opacity="0.6" />
        <Line x1="30%" y1="15%" x2="45%" y2="25%" stroke={Colors.brand.primary} strokeWidth="1" opacity="0.6" />
        <Line x1="45%" y1="25%" x2="60%" y2="20%" stroke={Colors.brand.primary} strokeWidth="1.5" opacity="0.8" />
        <Line x1="60%" y1="20%" x2="80%" y2="30%" stroke={Colors.brand.primary} strokeWidth="1" opacity="0.6" />

        <Line x1="15%" y1="45%" x2="35%" y2="50%" stroke={Colors.brand.primary} strokeWidth="1" opacity="0.6" />
        <Line x1="35%" y1="50%" x2="50%" y2="45%" stroke={Colors.brand.primary} strokeWidth="1.5" opacity="0.8" />
        <Line x1="50%" y1="45%" x2="70%" y2="55%" stroke={Colors.brand.primary} strokeWidth="1" opacity="0.6" />
        <Line x1="70%" y1="55%" x2="85%" y2="50%" stroke={Colors.brand.primary} strokeWidth="1" opacity="0.6" />

        <Line x1="20%" y1="70%" x2="40%" y2="75%" stroke={Colors.brand.primary} strokeWidth="1" opacity="0.6" />
        <Line x1="40%" y1="75%" x2="55%" y2="70%" stroke={Colors.brand.primary} strokeWidth="1" opacity="0.6" />
        <Line x1="55%" y1="70%" x2="75%" y2="80%" stroke={Colors.brand.primary} strokeWidth="1.5" opacity="0.8" />

        {/* Vertical connections */}
        <Line x1="30%" y1="15%" x2="35%" y2="50%" stroke={Colors.brand.primary} strokeWidth="0.8" opacity="0.5" />
        <Line x1="60%" y1="20%" x2="70%" y2="55%" stroke={Colors.brand.primary} strokeWidth="0.8" opacity="0.5" />
        <Line x1="45%" y1="25%" x2="40%" y2="75%" stroke={Colors.brand.primary} strokeWidth="0.8" opacity="0.5" />

        {/* Network nodes with glow */}
        <Circle cx="10%" cy="20%" r="3" fill="url(#glow)" />
        <Circle cx="30%" cy="15%" r="4" fill="url(#glow)" />
        <Circle cx="45%" cy="25%" r="3" fill="url(#glow)" />
        <Circle cx="60%" cy="20%" r="5" fill="url(#glow)" />
        <Circle cx="80%" cy="30%" r="3" fill="url(#glow)" />

        <Circle cx="15%" cy="45%" r="3" fill="url(#glow)" />
        <Circle cx="35%" cy="50%" r="5" fill="url(#glow)" />
        <Circle cx="50%" cy="45%" r="4" fill="url(#glow)" />
        <Circle cx="70%" cy="55%" r="3" fill="url(#glow)" />
        <Circle cx="85%" cy="50%" r="3" fill="url(#glow)" />

        <Circle cx="20%" cy="70%" r="3" fill="url(#glow)" />
        <Circle cx="40%" cy="75%" r="4" fill="url(#glow)" />
        <Circle cx="55%" cy="70%" r="3" fill="url(#glow)" />
        <Circle cx="75%" cy="80%" r="5" fill="url(#glow)" />

        {/* Solid core nodes */}
        <Circle cx="10%" cy="20%" r="2" fill={Colors.brand.primary} />
        <Circle cx="30%" cy="15%" r="2.5" fill={Colors.brand.primary} />
        <Circle cx="45%" cy="25%" r="2" fill={Colors.brand.primary} />
        <Circle cx="60%" cy="20%" r="3" fill={Colors.brand.primary} />
        <Circle cx="80%" cy="30%" r="2" fill={Colors.brand.primary} />

        <Circle cx="15%" cy="45%" r="2" fill={Colors.brand.primary} />
        <Circle cx="35%" cy="50%" r="3" fill={Colors.brand.primary} />
        <Circle cx="50%" cy="45%" r="2.5" fill={Colors.brand.primary} />
        <Circle cx="70%" cy="55%" r="2" fill={Colors.brand.primary} />
        <Circle cx="85%" cy="50%" r="2" fill={Colors.brand.primary} />

        <Circle cx="20%" cy="70%" r="2" fill={Colors.brand.primary} />
        <Circle cx="40%" cy="75%" r="2.5" fill={Colors.brand.primary} />
        <Circle cx="55%" cy="70%" r="2" fill={Colors.brand.primary} />
        <Circle cx="75%" cy="80%" r="3" fill={Colors.brand.primary} />
      </Svg>

      {/* Geometric accent shapes */}
      <Svg width="100%" height="100%" style={styles.geometric}>
        <Polygon points="85,5 95,25 75,25" fill="none" stroke={Colors.brand.primary} strokeWidth="1" />
        <Circle cx="5%" cy="90%" r="15" fill="none" stroke={Colors.brand.primary} strokeWidth="1" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  dotGrid: {
    position: 'absolute',
    opacity: 0.2,
  },
  network: {
    position: 'absolute',
    opacity: 0.15,
  },
  geometric: {
    position: 'absolute',
    opacity: 0.08,
  },
});
