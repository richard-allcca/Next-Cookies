import { ChangeEvent, useState, FC, PropsWithChildren, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import Cookies from 'js-cookie';
import axios from 'axios';

import { Layout } from '../components/layouts';

interface Props extends PropsWithChildren {
  theme: string;
}

const ThemeChanger: FC<Props> = ({ theme }) => {

  const [currentTheme, setCurrentTheme] = useState(theme);

  // Cambio de tema segun cookie
  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;

    setCurrentTheme(selectedTheme);

    Cookies.set('theme', selectedTheme);
  };

  // Evento para obtener cookie del servidor
  const onClick = async () => {
    const { data } = await axios.get('/api/hello');
    console.log({ data });
  };

  useEffect(() => {
    // lee la cookie del navegdor
    console.log('cookies', Cookies.get('theme'));
  }, []);


  return (
    <Layout>

      <Card>
        <CardContent>

          <FormControl>
            <FormLabel>Elije un Tema</FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={onThemeChange}
            >
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel value="custom" control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>

          <Button variant='outlined' onClick={onClick}>
            Solicitud - obtener cookie con axios
          </Button>

        </CardContent>
      </Card>

    </Layout>
  );
};


// NOTE
// - las Cookies se envian en el request por lo tanto las podemos usar al crear esta pagina
// - otra forma obtener cookies se puede hacer en el _app con "getInitialProps"

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { theme = 'light', name = 'No name' } = ctx.req.cookies;

  const validThemes = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'dark',
      name
    }
  };
};

export default ThemeChanger;
