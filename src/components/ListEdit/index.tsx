import { List } from '@/sharedTypes';
import * as Styled from './styles';
import { Input } from '../Input';

export type ListEditProps = {
  data: List;
  show: boolean;
};
export const ListEdit = ({ data, show }: ListEditProps) => {
  return (
    <Styled.ListEditWrapper show={show}>
      <h3>Nome:</h3>
      <Input value={data.name} />
      {data.items?.map((item, index) => {
        return (
          <>
            <h3>Item {index + 1}:</h3>
            <h4>Nome:</h4>
            <Input value={item.name} />
            <h4>Quantidade:</h4>
            <Input value={item.quantity ? item.quantity : ''} />
          </>
        );
      })}
    </Styled.ListEditWrapper>
  );
};
