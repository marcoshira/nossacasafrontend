import { UserProps } from './contexts/AuthContext';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  usersOnHomesId: string | null;
  guestsOnHomesId: string | null;
  friends: User[];
  owned: Home[];
  guest: Home[];
};

export type Home = {
  id: string;
  name: string;
  created_at: string;
  updated_at?: string;
  owners?: UserProps[];
  guests?: UserProps[];
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
};

export type Note = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  homeId: string;
  userId: string;
};

export type Recipe = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  homeId: string;
};
