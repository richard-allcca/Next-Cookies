import { ChangeEvent, useState, FC, PropsWithChildren, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import Cookies from 'js-cookie'
import axios from 'axios';

import { Layout } from '../components/layouts';

interface Props extends PropsWithChildren {
   theme: string
}


const ThemeChanger: FC<Props> = ({ theme }) => {

   const [currentTheme, setCurrentTheme] = useState(theme)

   const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
      const selectedTheme = event.target.value;

      setCurrentTheme(selectedTheme);

      Cookies.set('theme', selectedTheme);
   }

   const onClick = async () => {
      const { data } = await axios.get('/api/hello')

      console.log({ data })
   }

   useEffect(() => {
      console.log('cookies', Cookies.get('theme'))
   }, [])


   return (
      <Layout>

         <Card>
            <CardContent>
               <FormControl>
                  <FormLabel>Tema</FormLabel>

                  <RadioGroup
                     value={currentTheme}
                     onChange={onThemeChange}
                  >
                     <FormControlLabel value="light" control={<Radio />} label="Light" />
                     <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                     <FormControlLabel value="custom" control={<Radio />} label="Custom" />
                  </RadioGroup>

               </FormControl>

               <Button onClick={onClick}>
                  Solicitud
               </Button>

            </CardContent>
         </Card>

      </Layout>
   )
}



// NOTE - Cookies se pueden leer desde el front con un useEffect o del server como aquí 
// hacemos que esta pagina se genere desde el servidor con "getServerSideProps" 
// las Cookies se envian en el request por lo tanto las podemos usar al crear esta pagina

export const getServerSideProps: GetServerSideProps = async (ctx) => {

   const { theme = 'light', name = 'No name' } = ctx.req.cookies

   const validThemes = ['light', 'dark', 'custom'];

   return {
      props: {
         theme: validThemes.includes(theme) ? theme : 'dark',
         name
      }
   }
}

// REVIEW - esta forma obtener cookies se puede hacer en el _app con "getInitialProps"

export default ThemeChanger;
