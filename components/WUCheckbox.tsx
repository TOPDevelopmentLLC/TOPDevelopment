import IconContainer, { IconType } from 'components/IconContainer';
import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export interface WUCheckboxProps {
  style?: StyleProp<ViewStyle>;
  checked: boolean;
  onToggle: () => void;
  label?: string;
  color?: WUCheckboxColor;
}

export enum WUCheckboxColor {
  Black,
  White
}

const WUCheckbox = ({ 
  style, 
  checked, 
  onToggle, 
  label,
  color = WUCheckboxColor.Black
}: WUCheckboxProps) => {
  return (
    <Pressable
      style={[style, styles.container]}
      onPress={onToggle}
    >
      <View style={[styles.box, { borderColor: color === WUCheckboxColor.Black ? '#000000' : '#FFFFFF' }]}>
        {checked && (
            <IconContainer 
                iconProps={{
                    color: color === WUCheckboxColor.White ? '#000000' : '#FFFFFF',
                    name:'check',
                    size:24,
                    type:IconType.MaterialCommunityIcons
                }}            
            />
        )}
      </View>
      {label && <Text style={[styles.text, { color: color === WUCheckboxColor.Black ? '#000000' : '#FFFFFF' }]}>{label}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    width: 20,
    height: 20,
    padding: 12,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: '#FFFFFF'
  },
  text: {
    fontSize: 16,
    flexWrap: 'wrap',
    fontFamily: 'Audiowide'
  },
});

export default WUCheckbox;
