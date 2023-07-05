import Head from 'next/head';
import { canSSRAuth } from '../../utils/canSSRAuth';
import { setupAPIClient } from '../../services/api';
import { GetServerSidePropsContext } from 'next';
import { ListProps, ListTemplate } from '@/templates/List';

export default function Index({ data }: ListProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ListTemplate data={data} />
    </>
  );
}

export const getServerSideProps = canSSRAuth(
  async (ctx: GetServerSidePropsContext) => {
    const apiClient = setupAPIClient(ctx);

    const { query } = ctx;

    const id = query.id as string;
    const homeId = query.homeId as string;

    const response = await apiClient.get('/list', {
      params: {
        id: id,
        homeId: homeId,
      },
    });

    return {
      props: {
        data: response.data,
      },
    };
  },
);
