import '../styles/globals.scss';
import { useState } from 'react';
import { ItemsContext } from '../context/ItemsContext';
import { ThemeProvider, theme } from '../shared/material';

function MyApp({ Component, pageProps }) {
    const [items, setItems] = useState([]);

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ItemsContext.Provider>
    );
}

export default MyApp;
