import { List } from '@/sharedTypes';
import * as Styled from './styles';
import { formatReadableDate } from '@/utils/truename';
import Link from 'next/link';

export type ShoppingListProps = {
  data: List;
};
export const ShoppingList = ({ data }: ShoppingListProps) => {
  return (
    <Styled.ShoppingListWrapper>
      <Link
        href={`/list?id=${data.id}?homeId=${data.homeId}`}
        as={`/list/${data.id}`}
      >
        <h3>{data.name}</h3>
        <p>Criado em: {formatReadableDate(data.created_at)}</p>
      </Link>
    </Styled.ShoppingListWrapper>
  );
};
