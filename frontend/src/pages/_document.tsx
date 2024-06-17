import { ColorModeScript, defaultConfig } from '@yamada-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={defaultConfig.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
