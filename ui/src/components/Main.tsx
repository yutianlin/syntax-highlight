import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import FileTable from './FileTable'
import FileUpload from './FileUpload'
// import NavbarContainer from './NavbarContainer'

function Main() {
    return (
        <Router>
            <ChakraProvider>
                <FileUpload/>
                <FileTable/>
            </ChakraProvider>
        </Router>
    )
}

export default Main