import { Header } from '@/components/Header';
import * as Styled from './styles';
import { Input } from '@/components/Input';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';

export type LoginProps = {
  title?: string;
};
export const Login = ({ title }: LoginProps) => {
  return (
    <Styled.LoginWrapper>
      <Header />
      <Styled.LoginContentWrapper>
        <h1 className="login">LOGIN</h1>
        <Input child={<Email />} placeholder="Email Address" type="email" />
        <Input child={<Password />} placeholder="Password" type="password" />
      </Styled.LoginContentWrapper>
    </Styled.LoginWrapper>
  );
};
