import { Home, List } from '@/sharedTypes';

export const testhouse = {
  id: '3700c07c-accf-4204-8613-3ef112392f77',
  name: 'Casa da Lulu',
  created_at: '2023-06-26T16:46:02.299Z',
  owners: [
    {
      name: 'Luísa Maria Santiago da Costa Silva #629525',
      id: '75a42762-1c15-4614-ae2e-a5eb9c2dfd69',
      iconSrc: 'icon-2',
    },
  ],
  guests: [
    {
      name: 'Marcos Masato Hirazawa #386991',
      id: '413f6757-f18d-4243-b2ae-b51bb06c8bf8',
      iconSrc: 'icon-3',
    },
  ],
  lists: [
    {
      id: '3fc35e50-eca3-4d5b-a358-a67bb15285e1',
      name: 'Compras do mês',
      created_at: '2023-06-26T16:49:44.179Z',
      updated_at: '2023-06-26T16:49:44.179Z',
      homeId: '3700c07c-accf-4204-8613-3ef112392f77',
    },
    {
      id: '3fc35e50-eca3-4d5b-a358-a67bb15285e1',
      name: 'Compras para a festa',
      created_at: '2023-06-26T16:49:44.179Z',
      updated_at: '2023-06-26T16:49:44.179Z',
      homeId: '3700c07c-accf-4204-8613-3ef112392f77',
    },
    {
      id: '3fc35e50-eca3-4d5b-a358-a67bb15285e1',
      name: 'Compras para fazer Parmegiana',
      created_at: '2023-06-26T16:49:44.179Z',
      updated_at: '2023-06-26T16:49:44.179Z',
      homeId: '3700c07c-accf-4204-8613-3ef112392f77',
    },
  ],
  notes: [
    {
      id: 'a0069013-d0dd-496e-b21e-181339a43091',
      title: 'A lâmpada do banheiro queimou.',
      created_at: '2023-06-26T16:56:18.593Z',
      updated_at: '2023-06-26T16:56:18.593Z',
      homeId: '3700c07c-accf-4204-8613-3ef112392f77',
      userId: '75a42762-1c15-4614-ae2e-a5eb9c2dfd69',
    },
    {
      id: '1361a9d8-36d7-4fab-8a25-d0ef71846e1e',
      title: 'Acabou a água.',
      created_at: '2023-06-26T16:56:28.203Z',
      updated_at: '2023-06-26T16:56:28.203Z',
      homeId: '3700c07c-accf-4204-8613-3ef112392f77',
      userId: '75a42762-1c15-4614-ae2e-a5eb9c2dfd69',
    },
    {
      id: 'bed92865-f550-4724-afd2-b34ad8351bd4',
      title: 'Marquei pet shop pra cora na sexta.',
      created_at: '2023-06-26T16:57:17.605Z',
      updated_at: '2023-06-26T16:57:17.605Z',
      homeId: '3700c07c-accf-4204-8613-3ef112392f77',
      userId: '75a42762-1c15-4614-ae2e-a5eb9c2dfd69',
    },
  ],
  recipes: [
    {
      id: '61260fc2-e3f7-4eb1-ac65-ed2da6fcbf9a',
      name: 'Parmegiana',
      description: 'Franguinho a parmegiana hmmm',
      created_at: '2023-06-26T16:53:02.348Z',
      updated_at: '2023-06-26T16:53:02.348Z',
      homeId: '3700c07c-accf-4204-8613-3ef112392f77',
    },
    {
      id: '61260fc2-e3f7-4eb1-ac65-ed2da6fcbf9a',
      name: 'Macarrão com molho Pesto',
      description: 'Macarrãozinho com molho de manjericão e castanha.',
      created_at: '2023-06-26T16:53:02.348Z',
      updated_at: '2023-06-26T16:53:02.348Z',
      homeId: '3700c07c-accf-4204-8613-3ef112392f77',
    },
  ],
} as Home;

export const testList = {
  id: '3fc35e50-eca3-4d5b-a358-a67bb15285e1',
  name: 'Compras do mês',
  created_at: '2023-06-26T16:49:44.179Z',
  updated_at: '2023-06-26T16:49:44.179Z',
  homeId: '3700c07c-accf-4204-8613-3ef112392f77',
  items: [
    {
      id: '41b5590c-fd35-48a5-b47c-38df08b10f73',
      name: 'Mostarda',
      quantity: null,
      created_at: '2023-06-26T16:50:47.743Z',
      updated_at: '2023-06-26T16:50:47.743Z',
      shoppingListId: '3fc35e50-eca3-4d5b-a358-a67bb15285e1',
      recipeId: null,
    },
    {
      id: '4cdeaaeb-ece1-4c0a-b430-db1fc47e090f',
      name: 'Comida do tom',
      quantity: '5kg',
      created_at: '2023-06-26T16:51:10.106Z',
      updated_at: '2023-06-26T16:51:10.106Z',
      shoppingListId: '3fc35e50-eca3-4d5b-a358-a67bb15285e1',
      recipeId: null,
    },
    {
      id: '8520f4b2-697b-4041-8910-afa79285b58f',
      name: 'Adaptador de tomada',
      quantity: '2',
      created_at: '2023-06-26T16:51:24.848Z',
      updated_at: '2023-06-26T16:51:24.847Z',
      shoppingListId: '3fc35e50-eca3-4d5b-a358-a67bb15285e1',
      recipeId: null,
    },
    {
      id: '48d7abb6-a440-4bcc-af7b-d25e9ea0858f',
      name: 'Arroz',
      quantity: '2 kg',
      created_at: '2023-06-26T16:52:01.881Z',
      updated_at: '2023-06-26T16:52:01.881Z',
      shoppingListId: '3fc35e50-eca3-4d5b-a358-a67bb15285e1',
      recipeId: null,
    },
  ],
} as List;
