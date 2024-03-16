import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import { MessagesProvider } from './context/MessagesProvider';
import { theme } from './themes/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MessagesProvider>
        <Box style={{display: 'flex', flexDirection: 'column', height: '100vh', alignContent: 'stretch'}}>
          <TopBar />
          <Chatbox />
          <Footer />
        </Box>
      </MessagesProvider>
    </ThemeProvider>
  )
}

export default App
