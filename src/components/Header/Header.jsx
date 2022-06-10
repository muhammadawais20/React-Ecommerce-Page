import * as React from 'react';
import './header.scss';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from '@mui/material/styles';
function appBarLabel(label) {
    return (
        <Toolbar>
            <Typography variant="p" noWrap component="div" sx={{ flexGrow: 1 }}>
                {label}
            </Typography>
        </Toolbar>
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#d7ccc8',
        },
    },
});

const Header = () => {
    return (
        <div className="header">
            <Stack spacing={2} sx={{ flexGrow: 0 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar className='headerText' position="static" color="primary" enableColorOnDark>
                        {appBarLabel('Welcome to the Famous Dry Fruits online store!')}
                    </AppBar>
                </ThemeProvider>
            </Stack>
        </div>
    )
}

export default Header;