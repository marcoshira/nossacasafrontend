import { List } from '@/sharedTypes';
import * as Styled from './styles';
import { Header } from '@/components/Header';
import { ItemComponent } from '@/components/Item';

export type ListProps = {
  data: List;
};
export const ListTemplate = ({ data }: ListProps) => {
  return (
    <Styled.ListWrapper>
      <Header />
      <Styled.ListContainer>
        <h2>{data.name}</h2>
        <div className="list">
          {data.items?.map((item, index) => {
            return <ItemComponent data={item} key={index} />;
          })}
        </div>
      </Styled.ListContainer>
    </Styled.ListWrapper>
  );
};
