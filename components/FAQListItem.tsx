import { FAQ } from "lib/models/FAQ";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";


export interface FAQListItemProps {
    style?: StyleProp<ViewStyle>;
    type: FAQListItemType;
    FAQ: FAQ;
}

export enum FAQListItemType {
    default,
    card
}

const FAQListItem = ({
    style,
    type,
    FAQ,
}: FAQListItemProps) => {

    return (
        <View style={[style, type === FAQListItemType.card ? styles.card : null]}>
            <Text>{FAQ.question}</Text>
            <Text>{FAQ.answer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        borderWidth: 2,
        padding: 8,
        backgroundColor: '#D3D3D3',
        borderColor: '#000000'
    }
});

export default FAQListItem;