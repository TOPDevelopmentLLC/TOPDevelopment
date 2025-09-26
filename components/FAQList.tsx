import FAQListItem, { FAQListItemType } from "components/FAQListItem";
import { FAQ } from "lib/models/FAQ";
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native";


export interface FAQListProps {
    style?: StyleProp<ViewStyle>;
    type?: FAQListType;
    FAQs: FAQ[];
}

export enum FAQListType {
    default,
    card,
    border
}

const FAQList = ({
    style,
    type = FAQListType.default,
    FAQs,
}: FAQListProps) => {

    const getItemType = () => {
        switch(type) {
            case FAQListType.card:
                return FAQListItemType.card;
            case FAQListType.default:
            case FAQListType.border:
            default:
                return FAQListItemType.default;
        }
    }

    return (
        <ScrollView 
            style={[style, type === FAQListType.border ? styles.border : null]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            {
                FAQs.map((faq,i) => (
                    <FAQListItem 
                        key={i} 
                        style={styles.faqItem}
                        FAQ={faq} 
                        type={getItemType()} 
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    faqItem: {
        marginVertical: 4
    },
    border: {
        borderRadius: 8,
        borderWidth: 2,
        padding: 8,
        backgroundColor: '#D3D3D3',
        borderColor: '#000000'
    }
});

export default FAQList;