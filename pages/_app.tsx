import 'styles/index.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
// import Nav from '../components/Nav'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* <Nav /> */}
      <div className="relative py-20 bg-white overflow-hidden">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
export default MyApp;
