
import { SyntheticEvent, useState } from 'react'
import { Box, Text, Flex, Button, Input} from '@chakra-ui/react'
import InstructionsModal from './InstructionsModal'


function FileUpload() {
    const [isFileTypeModalOpen, setIsFileTypeModalOpen] = useState<boolean>(false)

    const handleFileUpload = async (element: HTMLInputElement) => {
        console.log(element)
    }

    return (
        <Box
            width="50%"
            m="100px auto"
            padding="2"
            shadow="base"
        >
            <Flex direction="column" alignItems="center" mb="5">
                <Text fontSize="2xl" mb="4">Upload a document</Text>
                <Button 
                    size="sm" 
                    colorScheme="green"
                    onClick={() => setIsFileTypeModalOpen(true)}>Instructions</Button>
                <Box mt="10" ml="25">
                    <Input 
                    type="file" 
                    variant="unstyled"
                    onChange={(e: SyntheticEvent) => handleFileUpload(e.currentTarget as HTMLInputElement)}
                    />
                </Box>
            </Flex>
            <InstructionsModal
                isOpen = {isFileTypeModalOpen}
                onClose={() => setIsFileTypeModalOpen(false)}
            />
        </Box>
    )
}

export default FileUpload