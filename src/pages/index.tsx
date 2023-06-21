import Head from 'next/head';
import { Login } from '@/templates/Login';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { canSSRGuest } from '@/utils/canSSRGuest';

export default function Index() {
  const { signIn } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Nossa Casa</title>
      </Head>
      <Login onLogin={signIn} />
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
