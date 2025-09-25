import { FAQ } from "lib/models/FAQ";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Collapsible from "./Collapsible";


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
            <Collapsible title={FAQ.question} subtext={FAQ.answer} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        borderWidth: 2,
        padding: 8,
        backgroundColor: '#ea2320',
        borderColor: '#000000'
    },
    cardText: {
        fontFamily: 'Audiowide'
    }
});

export default FAQListItem;