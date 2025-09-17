import BaseButton from "components/BaseButton";
import BasePage from "components/BasePage";
import WUCheckbox, { WUCheckboxColor } from "components/WUCheckbox";
import WUPaperTextInput from "components/WUPaperTextInput";
import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";


const ContactUs = () => {
    const pageWidth = Dimensions.get('window').width;
    const pageHeight = Dimensions.get('window').height;
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [contactAgreement,setContactAgreement] = useState(false);

    const submitButtonClicked = () => {
    
    }

    return (
        <BasePage>
            <View style={{ width: pageWidth * 0.5, marginTop: pageHeight * 0.1 }}>
                <Text style={styles.subTitle}>Get in Touch</Text>
                <Text style={styles.title}>Reach out to Us</Text>
                <Text style={styles.subTitle}>{`Please feel free to contact us and we\nwill get back to you as soon as we can.`}</Text>
            </View>
            <View style={styles.formContainer}>
                <WUPaperTextInput 
                    style={{ width: pageWidth * 0.5 }}
                    placeholder={"Name"} 
                    onTextChange={(newName) => setName(newName)} 
                />
                <WUPaperTextInput 
                    style={{ width: pageWidth * 0.5 }}
                    placeholder={"Email"} 
                    onTextChange={(newEmail) => setEmail(newEmail)} 
                />
                <WUPaperTextInput 
                    style={{ width: pageWidth * 0.5 }}
                    placeholder={"Message"} 
                    multiline={true} 
                    onTextChange={(newMessage) => setMessage(newMessage)} 
                />
                <WUCheckbox 
                    style={{ width: pageWidth * 0.5 }}
                    checked={contactAgreement} 
                    onToggle={() => setContactAgreement(!contactAgreement)} 
                    label="I agree to be contacted and terms of the Privacy Policy"
                    color={WUCheckboxColor.White}
                />
                <BaseButton
                    style={{ width: pageWidth * 0.5 }}
                    text={"Submit"} 
                    onPress={submitButtonClicked} 
                />
            </View>
        </BasePage>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    subTitle: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    formContainer: {
        gap: 20,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 50
    },
});

export default ContactUs;