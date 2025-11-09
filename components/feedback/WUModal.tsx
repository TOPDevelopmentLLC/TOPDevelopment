import ModalHeader, { ModalHeaderProps } from "components/ModalHeader";
import { Dimensions } from "react-native";
import { Modal } from "react-native-paper";


export interface WUModalProps {
    headerProps: ModalHeaderProps;
    isVisible: boolean;
    onDismiss?: () => void;
}

const WUModal: React.FC<React.PropsWithChildren<WUModalProps>> = ({
    headerProps,
    isVisible,
    onDismiss,
    children
}) => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <Modal
            visible={isVisible}
            onDismiss={onDismiss}
            dismissable={true}
            contentContainerStyle={{
                width: windowWidth * 0.6,
                backgroundColor: '#FFFFFF',
                alignSelf: 'center',
                padding: 8,
                borderRadius: 4,
            }}>
                <ModalHeader {...headerProps} />
                {children}
        </Modal>
    )
}

export default WUModal;