import { Header } from '../Header';
import { Input } from '../Input';
import * as Styled from './styles';

export const Content = () => {
  return (
    <Styled.Content>
      <Header />
      <Styled.Title1>WE&apos;RE</Styled.Title1>
      <Styled.Title2>COMING</Styled.Title2>
      <Styled.Title2>SOON</Styled.Title2>
      <Styled.Paragraph>
        Hello fellow shoppers! We&apos;re currently building our new fashion
        store. Add your email below to stay up-to-date with announcements and
        our launch deals.
      </Styled.Paragraph>
      <Input />
    </Styled.Content>
  );
};
