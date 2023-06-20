import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import '../styles/globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { customTheme, darkTheme, lightTheme } from '../themes';
import Cookies from 'js-cookie';
import { AppContextType } from 'next/dist/shared/lib/utils';

// NOTE - esta forma de usar las cookies para los temas en lugar de getInitialProps es para mantener las caracteristicas de una pagina estatica

export default function App({ Component, pageProps }: AppProps) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {

    const getCookieTheme = Cookies.get('theme') || 'light';

    const selectedTheme = getCookieTheme === 'light'
      ? lightTheme
      : (getCookieTheme === 'dark')
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme} >
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// REVIEW - No es util trabajar con getInitialProps porque se pierde todos las funciones static
// App.getInitialProps = async (appContext: AppContextType) => {

//   const { theme } = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { theme: 'light' };

//   const validThemes = ['light', 'dark', 'custom'];

//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',
//   };
// };
