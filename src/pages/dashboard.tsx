import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import { useContext } from 'react';

import { canSSRAuth } from '../utils/canSSRAuth';
import { AuthContext } from '../contexts/AuthContext';
import { setupAPIClient } from '../services/api';

import { AllUser } from '@/sharedTypes';
import { DashBoard } from '@/templates/DashBoard';

export type DashboardIndexProps = {
  data: AllUser;
};

export default function Index({ data }: DashboardIndexProps) {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashBoard data={data} onSignOut={signOut} />
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
