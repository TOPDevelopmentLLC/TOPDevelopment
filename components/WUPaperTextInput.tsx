import { useState } from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";


export interface WUPaperTextInputProps {
    style?: StyleProp<TextStyle>;
    defaultValue?: string;
    placeholder: string;
    onTextChange: (text:string) => void;
    disabled?: boolean;
    multiline?: boolean;
}

const WUPaperTextInput = ({
    style,
    defaultValue,
    placeholder,
    onTextChange,
    disabled = false,
    multiline = false,
}: WUPaperTextInputProps) => {
    const [inputHeight, setInputHeight] = useState(0);

    return (
        <TextInput 
            placeholder={placeholder}
            mode="outlined" 
            textColor="#000000"
            activeOutlineColor="#000000" 
            outlineColor="#000000"
            style={[style, styles.input, {
                height: Math.max(multiline ? 100 : 40, inputHeight),
            }]}
            contentStyle={styles.inputText}
            value={defaultValue}
            onChangeText={(text) => onTextChange(text)}
            disabled={disabled}
            editable={!disabled}
            multiline={multiline}
            onContentSizeChange={(e) =>
                setInputHeight(e.nativeEvent.contentSize.height)
            }
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFFFFF'
    },
    inputText: {
        fontFamily: 'Audiowide'
    }
})

export default WUPaperTextInput;