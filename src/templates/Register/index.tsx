import { Input } from '@/components/Input';
import * as Styled from './styles';
import { useState } from 'react';
import { Button } from '@/components/Button';

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
      <Input
        OnChange={(val) => setName(val)}
        value={name}
        type="text"
        placeholder="Nome"
      />
      <Input
        OnChange={(val) => setEmail(val)}
        value={email}
        type="email"
        placeholder="Email"
      />
      <Input
        OnChange={(val) => setPassword(val)}
        value={password}
        type="password"
        placeholder="Senha"
      />
      <Input
        OnChange={(val) => setConfirmPassword(val)}
        value={confirmPassword}
        type="password"
        placeholder="Confirme sua senha"
      />
      <Button onClick={handleSubmit}>RESGISTRAR</Button>
    </Styled.RegisterWrapper>
  );
};
