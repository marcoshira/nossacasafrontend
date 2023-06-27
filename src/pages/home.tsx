import Head from 'next/head';
import { canSSRAuth } from '../utils/canSSRAuth';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { setupAPIClient } from '../services/api';
import { GetServerSidePropsContext } from 'next';
import { AllUser } from '@/sharedTypes';
import { Home } from '@/templates/Home';

export type HomeIndexProps = {
  data: AllUser;
};

export default function Index({ data }: HomeIndexProps) {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Home data={data} onSignOut={signOut} />
    </>
  );
}

export const getServerSideProps = canSSRAuth(
  async (ctx: GetServerSidePropsContext) => {
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/user');

    return {
      props: {
        data: response.data,
      },
    };
  },
);
