import { Item } from '@/sharedTypes';
import * as Styled from './styles';

export type ItemProps = {
  data: Item;
};
export const ItemComponent = ({ data }: ItemProps) => {
  return (
    <Styled.ItemWrapper>
      <p className="itemName">{data.name}</p>
      <p className="itemQtd">{data.quantity}</p>
    </Styled.ItemWrapper>
  );
};
