import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import '../styles/globals.css'

// NOTE - CssBaseline de material es diferente del de next que resetea los estilos
import { CssBaseline, ThemeProvider } from '@mui/material'

import { customTheme, darkTheme, lightTheme } from '../themes'
import Cookies from 'js-cookie'

// NOTE - esta forma de usar las cookies para los temas en lugar de getInitialProps es para mantener las caracteristicas de una pagina estatica

export default function App({ Component, pageProps }: AppProps) {

   const [currentTheme, setCurrentTheme] = useState(lightTheme)

   useEffect(() => {

      const cookieTheme = Cookies.get('theme') || 'light'

      const selectedTheme = cookieTheme === 'light'
         ? lightTheme
         : (cookieTheme === 'dark')
            ? darkTheme
            : customTheme

      setCurrentTheme(selectedTheme);
   }, [])

   return (
      <ThemeProvider theme={currentTheme} >
         <CssBaseline />
         <Component {...pageProps} />
      </ThemeProvider>
   )
}

// NOTE - Comentado porque no es util trabajar con getInitialProps clase 169

// App.getInitialProps = async (appContext: AppContext) => {

//    const cookies = appContext.ctx.req
//       ? (appContext.ctx.req as any).cookies
//       : { theme: 'light' }

//    console.log('getInitialProps app', cookies);

//    return {

//    }
// }
