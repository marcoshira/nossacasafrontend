export type AllUser = {
  user: User;
  owned: Home[];
  guest: Home[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  iconSrc: string;
  password?: string;
  created_at?: string;
  updated_atw: string;
  usersOnHomesId?: string | null;
  guestsOnHomesId?: string | null;
  friends?: User[];
};

export type Home = {
  id: string;
  name: string;
  created_at: string;
  updated_at?: string;
  owners?: User[];
  guests?: User[];
  lists?: List[];
  notes?: Note[];
  recipes?: Recipe[];
};

export type List = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  homeId: string;
  items?: Item[];
};

export type Item = {
  id: string;
  name: string;
  created_at?: string;
  updated_at?: string;
  quantity?: string | null;
  shoppingListId?: string | null;
  recipeId?: string | null;
};

export type Note = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  homeId?: string;
  userId?: string;
  user?: {
    id: string;
    name: string;
  };
};

export type Recipe = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  homeId: string;
  items?: Item[];
};
