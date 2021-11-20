import type { NextPage } from 'next';
import Head from 'next/head';

import Intro from '../components/Intro';
import Projects from '../components/Projects';


export default function Home() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <Intro />
    </div>
  )
}