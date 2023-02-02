import StyleProvider from '@/common/providers/style-provider';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}
