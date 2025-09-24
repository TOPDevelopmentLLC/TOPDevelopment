import { IconType } from "components/IconContainer"
import WUModal from "components/WUModal"


export interface InformationalModalProps {

}

const InformationalModal = ({

} : InformationalModalProps) => {

    return (
        <WUModal 
            headerProps={{
                title: '',
                icon: {
                    name:'exclamation-circle',
                    size: 48,
                    color: '#000000',
                    type: IconType.AntDesign
                }
            }} 
            isVisible={false}>

        </WUModal>
    )
}