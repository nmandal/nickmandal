import type { NextPage } from 'next';
import Head from 'next/head';

import Intro from '../components/Intro';
import Projects from '../components/Projects';

import {useSession, signIn, signOut} from 'next-auth/react';


export default function Home() {
  const {data: session} = useSession();
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
            <>
      {session ?
        <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
        </>
        :
        <>
{/* <button onClick={()  => signIn()}>Sign in</button> */}
        </>
      }
      </>
      <Intro />
    </div>
  )
}