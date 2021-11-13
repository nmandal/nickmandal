import 'styles/index.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <div className="relative py-20 bg-white overflow-hidden">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
export default MyApp;
