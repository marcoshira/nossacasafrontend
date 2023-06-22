import { Header } from '@/components/Header';
import * as Styled from './styles';
import { Input } from '@/components/Input';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import { Button } from '@/components/Button';
import { useState } from 'react';
import Link from 'next/link';
import { emailValidator } from '@/utils/emailValidator';

export type LoginProps = {
  onLogin?: (email: string, password: string) => Promise<void>;
};
export const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    /* istanbul ignore else */
    if (onLogin) {
      if (email === '' || password === '' || emailValidator(email) === false) {
        setError('Email ou senha inválidos.');
        setLoading(false);
        return;
      }
      await onLogin(email, password);
    }
    setLoading(false);
    setError('Email ou senha inválidos.');
  };
  return (
    <Styled.LoginWrapper>
      <Header />
      <Styled.LoginContentWrapper>
        <h1 className="login">LOGIN</h1>

        <Input
          child={<Email />}
          placeholder="Email Address"
          type="email"
          OnChange={(val) => setEmail(val)}
          value={email}
        />
        <Input
          child={<Password />}
          placeholder="Password"
          type="password"
          OnChange={(val) => setPassword(val)}
          value={password}
        />
        <Button disabled={loading} type="submit" onClick={handleSubmit}>
          {loading ? 'Carregando...' : 'LOGIN'}
        </Button>
        <p className="error">{error && error}</p>
        <div className="footer">
          <p>Não tem uma conta?</p>
          <Link href="/register">Inscreva-se</Link>
        </div>
      </Styled.LoginContentWrapper>
    </Styled.LoginWrapper>
  );
};
