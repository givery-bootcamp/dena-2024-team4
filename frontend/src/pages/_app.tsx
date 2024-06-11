import type { AppProps } from 'next/app';
import { UIProvider, createColorModeManager } from '@yamada-ui/react';
import { theme } from '@/libs/yamada-ui';

export default function App({ Component, pageProps }: AppProps) {
  const { cookies } = pageProps;
  const colorModeManager = createColorModeManager('ssr', cookies);

  return (
    <UIProvider theme={theme} colorModeManager={colorModeManager}>
      <Component {...pageProps} />
    </UIProvider>
  );
}
