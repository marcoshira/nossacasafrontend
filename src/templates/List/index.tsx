import { List } from '@/sharedTypes';
import * as Styled from './styles';
import { Header } from '@/components/Header';
import { ItemComponent } from '@/components/Item';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowBack, ModeEdit } from '@styled-icons/material-outlined';
import { ListEdit } from '@/components/ListEdit';

export type ListProps = {
  data: List;
};
export const ListTemplate = ({ data }: ListProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const [shopList, setShopList] = useState<List>(data);

  return (
    <Styled.ListWrapper>
      <div className="arrowBack">
        <Link
          href={`/home?id=${shopList.homeId}`}
          as={`/home/${shopList.homeId}`}
        >
          <ArrowBack />
        </Link>
      </div>
      <Header />

      <Styled.ListContainer>
        <a className="titleContainer" onClick={() => setShowEdit(!showEdit)}>
          <h2>{shopList.name}</h2>
          <ModeEdit />
        </a>
        <div className="list">
          {shopList.items?.map((item, index) => {
            return <ItemComponent data={item} key={index} />;
          })}
        </div>
      </Styled.ListContainer>
      <ListEdit data={shopList} show={showEdit} onEdit={setShopList} />
    </Styled.ListWrapper>
  );
};
