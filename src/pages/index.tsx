import Head from 'next/head';
import { Home } from '../templates/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Nossa Casa</title>
      </Head>
      <Home />
    </>
  );
}
