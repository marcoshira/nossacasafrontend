import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
import { api } from '../services/apiClient';
import { Home } from '@/sharedTypes';

type AuthContextData = {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  signUp: (name: string, email: string, password: string) => Promise<void>;
};

export type UserProps = {
  id: string;
  name: string;
  email: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth.token');
    Router.push('/');
  } catch {
    console.log('erro ao deslogar');
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@nextauth.token': token } = parseCookies();

    if (token) {
      api
        .get('/me')
        .then((response) => {
          const { id, name, email } = response.data;

          setUser({
            id,
            name,
            email,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/session', {
        email,
        password,
      });

      const { id, name, token } = response.data;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 3600 * 24 * 30,
        path: '/',
      });

      setUser({
        id,
        name,
        email,
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      Router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }

  async function signUp(name: string, email: string, password: string) {
    try {
      await api.post('/users', {
        name,
        email,
        password,
      });

      signIn(email, password);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}