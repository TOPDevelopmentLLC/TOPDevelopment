import axios from 'axios';
import BaseButton from "components/BaseButton";
import BasePage from "components/BasePage";
import { IconType } from "components/IconContainer";
import WUCheckbox, { WUCheckboxColor } from "components/WUCheckbox";
import WUModal from "components/WUModal";
import WUPaperTextInput from "components/WUPaperTextInput";
import { Colors, FontFamily, FontSize, Spacing } from "constants/theme";
import { useScreenDimensions } from "hooks/useScreenDimensions";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


const ContactUs = () => {
    const { pageWidth, pageHeight } = useScreenDimensions();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [company,setCompany] = useState('');
    const [message,setMessage] = useState('');
    const [contactAgreement,setContactAgreement] = useState(false);
    const [modalTitle,setModalTitle] = useState('');
    const [isModalVisible,setIsModalVisible] = useState(false);

    const submitButtonClicked = async () => {
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

        try {
            const response = await axios.post(
                'https://api.thatoneprogrammer.dev/api/v1/email/send',
                {
                    to: email,
                    textBody: message,
                    customerName: name,
                    customerPhone: phone,
                    customerCompany: company
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-KEY': 'ThatOneProgrammerDevelopment.AppAPIKey'
                    },
                    timeout: 10000 // 10 second timeout
                }
            );

            if (response.status === 200 || response.status === 202) {
                setModalTitle('Email Sent Successfully!');
                setIsModalVisible(true);
                // Clear form
                setName('');
                setEmail('');
                setPhone('');
                setCompany('');
                setMessage('');
                setContactAgreement(false);
            }
        } catch (error: any) {
            if (error.code === 'ECONNABORTED') {
                setModalTitle('Request Timeout - Please Try Again');
            } else if (error.response) {
                setModalTitle(`Failed to Send Email: ${error.response.status}`);
                console.error('Error response:', error.response.data);
            } else if (error.request) {
                setModalTitle('No Response from Server');
                console.error('No response received:', error.request);
            } else {
                setModalTitle(`Error: ${error.message || 'Cannot Connect'}`);
            }
            setIsModalVisible(true);
            console.error('Request error:', error);
        }
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
                    placeholder={"Phone Number"}
                    onTextChange={(newPhone) => setPhone(newPhone)}
                />
                <WUPaperTextInput
                    style={{ width: pageWidth * 0.5 }}
                    placeholder={"Company"}
                    onTextChange={(newCompany) => setCompany(newCompany)}
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