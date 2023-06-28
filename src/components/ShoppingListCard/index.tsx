import { List } from '@/sharedTypes';
import * as Styled from './styles';
import { formatReadableDate } from '@/utils/truename';

export type ShoppingListProps = {
  data: List;
};
export const ShoppingList = ({ data }: ShoppingListProps) => {
  return (
    <Styled.ShoppingListWrapper>
      <h3>{data.name}</h3>
      <p>Criado em: {formatReadableDate(data.created_at)}</p>
    </Styled.ShoppingListWrapper>
  );
};
