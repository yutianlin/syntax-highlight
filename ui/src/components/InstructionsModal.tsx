import Modal from './common/Modal'

interface Props {
    isOpen: boolean, 
    onClose: () => void
}

const instructionText: string = "Upload your text, highlight the grammar and click add."

function InstructionsModal({isOpen, onClose}: Props) {
    return (
        <Modal 
            isOpen = {isOpen} 
            onClose = {onClose} 
            title="Upload your script" 
            body ={instructionText}
        />
    )
}

export default InstructionsModal