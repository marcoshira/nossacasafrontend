import { Item } from '@/sharedTypes';
import * as Styled from './styles';

export type ItemProps = {
  data: Item;
};
export const ItemComponent = ({ data }: ItemProps) => {
  return (
    <Styled.ItemWrapper>
      <p>{data.name}</p>
      <p>{data.quantity}</p>
    </Styled.ItemWrapper>
  );
};
