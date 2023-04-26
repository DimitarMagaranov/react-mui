import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Add from './components/Add';
import { useState } from 'react';

function App() {
    const [mode, setMode] = useState('light');

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    const onChangeThemeHandler = () => {
        setMode((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Navbar></Navbar>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar onChangeThemeHandler={onChangeThemeHandler} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    );
}

export default App;
