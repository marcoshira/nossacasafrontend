import { List } from '@/sharedTypes';
import * as Styled from './styles';
import { Input } from '../Input';
import { Trash, PlusSquareFill } from '@styled-icons/bootstrap';

export type ListEditProps = {
  data: List;
  show: boolean;
};
export const ListEdit = ({ data, show }: ListEditProps) => {
  return (
    <Styled.ListEditWrapper show={show}>
      <h3>Nome:</h3>

      <Input value={data.name} child={<Trash />} />

      {data.items?.map((item, index) => {
        return (
          <div className="itemsEdit" key={index}>
            <div className="title">
              <h3>Item {index + 1}:</h3>
              <Trash />
            </div>

            <div className="items">
              <h4>Nome:</h4>
              <Input value={item.name} />
              <h4>Quantidade:</h4>
              <Input value={item.quantity ? item.quantity : ''} />
            </div>
          </div>
        );
      })}
      <div className="addItem">
        <button>
          <p>Adicionar Item</p>
          <PlusSquareFill />
        </button>
      </div>
    </Styled.ListEditWrapper>
  );
};
