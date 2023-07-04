import Head from 'next/head';
import { canSSRAuth } from '../../utils/canSSRAuth';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { setupAPIClient } from '../../services/api';
import { GetServerSidePropsContext } from 'next';
import { Home as HomeType } from '@/sharedTypes';
import { Home } from '@/templates/Home';
import { useRouter } from 'next/router';

export type HomeIndexProps = {
  data: HomeType;
};

export default function Index({ data }: HomeIndexProps) {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Home {...data} onSignOut={signOut} />
    </>
  );
}

export const getServerSideProps = canSSRAuth(
  async (ctx: GetServerSidePropsContext) => {
    const apiClient = setupAPIClient(ctx);

    const { query } = ctx;

    const id = query.id as string;

    const response = await apiClient.get('/home/id', {
      params: {
        id: id,
      },
    });

    return {
      props: {
        data: response.data,
      },
    };
  },
);
