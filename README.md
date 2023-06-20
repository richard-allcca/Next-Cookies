# Cookies

## Getting Started

First, run the development server:

    npm run dev
    or
    yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencias

    yarn add @mui/material @emotion/react @emotion/styled
    yarn add @mui/icons-material
    yarn add js-cookie

## Notas

- CssBaseline, es necesario en App para aplicar los estilos de `ui/material`
- Las Cookies en front, pueden ser leidas con `useState` o `getInitialProps`
- Las Cookies en back on Next, pueden ser leidas con `getServerSideProps`
- Error en Cookies, La cookie “theme” no tiene un valor de atributo “SameSite” adecuado. Pronto, las cookies sin el atributo “SameSite o con un valor no válido serán tratadas como “Lax”. Esto significa que la cookie ya no se enviará en contextos de terceros. Si su aplicación depende de que esta cookie esté disponible en dichos contextos, añada el atributo “SameSite=none“. Para saber más sobre el atributo “SameSite“, lea [Set-cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
