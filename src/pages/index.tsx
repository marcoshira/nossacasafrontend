import Head from 'next/head';
import { Login } from '@/templates/Login';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { canSSRGuest } from '@/utils/canSSRGuest';
import { Profile } from '@/templates/Profile';
import { testUser } from '@/api/user';
import { Home } from '@/templates/Home';
import { testhouse } from '@/api/home';

export default function Index() {
  // const { signIn } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Nossa Casa</title>
      </Head>
      {/* <Login onLogin={signIn} /> */}
      <Home {...testhouse} />
    </>
  );
}

// export const getServerSideProps = canSSRGuest(async (ctx) => {
//   return {
//     props: {},
//   };
// });
