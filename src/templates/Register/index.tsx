import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import { Person } from '@styled-icons/material-outlined/Person';
import { ArrowBack } from '@styled-icons/material-outlined/ArrowBack';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';

import { useState } from 'react';
import Link from 'next/link';

import * as Styled from './styles';
import { emailValidator } from '@/utils/emailValidator';

export type RegisterProps = {
  onRegister: (name: string, email: string, password: string) => Promise<void>;
};
export const Register = ({ onRegister }: RegisterProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    /* istanbul ignore else */
    if (onRegister) {
      if (email === '' || password === '' || name === '') {
        setError('Preencha todos os campos.');
        setLoading(false);
        return;
      }

      if (emailValidator(email) === false) {
        setError('Preencha um email válido.');
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError('As senhas devem ser as mesmas.');
        setLoading(false);
        return;
      }
      await onRegister(name, email, password);
    }
    setLoading(false);
  };

  return (
    <Styled.RegisterWrapper>
      <div className="arrowBack">
        <Link href="/">
          <ArrowBack />
        </Link>
      </div>
      <Header />
      <Styled.RegisterContentWrapper>
        <h1>INSCREVA-SE</h1>
        <Input
          OnChange={(val) => setName(val)}
          value={name}
          type="text"
          placeholder="Nome"
          child={<Person />}
        />
        <Input
          OnChange={(val) => setEmail(val)}
          value={email}
          type="email"
          placeholder="Email"
          child={<Email />}
        />
        <Input
          OnChange={(val) => setPassword(val)}
          value={password}
          type="password"
          placeholder="Senha"
          child={<Password />}
        />
        <Input
          OnChange={(val) => setConfirmPassword(val)}
          value={confirmPassword}
          type="password"
          placeholder="Confirme sua senha"
          child={<Password />}
        />
        <p className="error">{error && error}</p>
        <Button onClick={handleSubmit}>INSCREVER</Button>
      </Styled.RegisterContentWrapper>
    </Styled.RegisterWrapper>
  );
};
