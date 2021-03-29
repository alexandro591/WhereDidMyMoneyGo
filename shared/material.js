export { TextField, Button } from '@material-ui/core';
export { AccessTime, Edit, Delete } from '@material-ui/icons';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#4470b5',
            dark: '#2250f3',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        },
    },
});

export { ThemeProvider, theme };
