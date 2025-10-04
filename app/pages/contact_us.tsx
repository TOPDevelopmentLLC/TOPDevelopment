import BaseButton from "components/BaseButton";
import BasePage from "components/BasePage";
import { IconType } from "components/IconContainer";
import WUCheckbox, { WUCheckboxColor } from "components/WUCheckbox";
import WUModal from "components/WUModal";
import WUPaperTextInput from "components/WUPaperTextInput";
import { Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { globalStyles } from "constants/globalStyles";
import { useScreenDimensions } from "hooks/useScreenDimensions";
import * as MailComposer from 'expo-mail-composer';
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


const ContactUs = () => {
    const { pageWidth, pageHeight } = useScreenDimensions();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [contactAgreement,setContactAgreement] = useState(false);
    const [modalTitle,setModalTitle] = useState('');
    const [isModalVisible,setIsModalVisible] = useState(false);

    const submitButtonClicked = () => {
        if (name.length === 0) {
            setModalTitle('Insert Valid Name');
            setIsModalVisible(true);
            return;
        }
        if (email.length === 0) {
            setModalTitle('Insert Valid Email');
            setIsModalVisible(true);
            return;
        }
        if (message.length === 0) {
            setModalTitle('Insert a Message to Send');
            setIsModalVisible(true);
            return;
        }
        const sendEmail = async () => {
            const isAvailable = await MailComposer.isAvailableAsync();
            if (isAvailable) {
                await MailComposer.composeAsync({
                    recipients: ['thatoneprogrammer@gmail.com'],
                    subject: 'Subject of the email',
                    body: message,
                });
            } else {
                setModalTitle('Cannot Connect to Email.');
                setIsModalVisible(true);
            }
        };
        sendEmail();
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
            <WUModal 
                headerProps={{
                    title: modalTitle,
                    icon: {
                        name:'exclamation-circle',
                        size: FontSize.xl,
                        color: Colors.brand.black,
                        type: IconType.AntDesign
                    }
                }} 
                isVisible={isModalVisible} 
                onDismiss={() => setIsModalVisible(false)}
            />
        </BasePage>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: FontSize.xl,
        fontWeight: 'bold',
        color: Colors.text.primary,
        fontFamily: FontFamily.primary,
    },
    subTitle: {
        fontSize: FontSize.md,
        color: Colors.text.primary,
        fontFamily: FontFamily.primary,
    },
    formContainer: {
        gap: Spacing.lg,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: Spacing.xxl,
    },
});

export default ContactUs;