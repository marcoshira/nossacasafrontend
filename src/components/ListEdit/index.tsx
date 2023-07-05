import { Item, List } from '@/sharedTypes';
import * as Styled from './styles';
import { Input } from '../Input';
import { Trash, PlusSquareFill } from '@styled-icons/bootstrap';
import { useState, useEffect } from 'react';
import { setupAPIClient } from '@/services/api';

export type ListEditProps = {
  data: List;
  show: boolean;
  onEdit?: (data: List) => void;
};
export const ListEdit = ({ data, show, onEdit }: ListEditProps) => {
  const [list, setList] = useState<List>(data);
  const [itemAddedName, setItemAddedName] = useState('');
  const [itemAddedQtd, setItemAddedQtd] = useState('');

  useEffect(() => {
    if (onEdit) {
      onEdit(list);
    }
  }, [list]);

  const handleInputNameChange = (val: string, index: number) => {
    if (list.items) {
      const updatedListItems = [...list.items];
      updatedListItems[index].name = val;

      const updatedList = list;
      updatedList.items = updatedListItems;

      setList(updatedList);
    }
  };

  const handleInputQtdChange = (val: string, index: number) => {
    if (list.items) {
      const updatedListItems = [...list.items];
      updatedListItems[index].quantity = val;

      const updatedList = list;
      updatedList.items = updatedListItems;

      setList(updatedList);
    }
  };

  const addItem = async () => {
    try {
      const apiClient = setupAPIClient(undefined);

      const itemToAdd: Item = await apiClient.post(
        '/list/item',
        { name: itemAddedName, quantity: itemAddedQtd },
        { params: { listId: list.id } },
      );
      if (list.items) {
        const updatedListItems = [...list.items];
        updatedListItems.push(itemToAdd);

        const updatedList = list;
        updatedList.items = updatedListItems;

        setList(updatedList);
      }
    } catch (err) {
      console.log(err);
      window.location.reload();
    }
  };

  return (
    <Styled.ListEditWrapper show={show}>
      <h3>Nome:</h3>

      <Input value={list.name} child={<Trash />} />

      {list.items?.map((item, index) => {
        return (
          <div className="itemsEdit" key={index}>
            <div className="title">
              <h3>Item {index + 1}:</h3>
              <Trash />
            </div>

            <div className="items">
              <h4>Nome:</h4>
              <Input
                value={item.name}
                OnChange={(val) => handleInputNameChange(val, index)}
              />
              <h4>Quantidade:</h4>
              <Input
                value={item.quantity ? item.quantity : ''}
                OnChange={(val) => handleInputQtdChange(val, index)}
              />
            </div>
          </div>
        );
      })}

      <div className="addItem">
        <div className="itemAdded">
          <div className="title">
            <h3>Adicionar Item:</h3>
          </div>

          <div className="items">
            <h4>Nome:</h4>
            <Input
              value={itemAddedName}
              OnChange={(val) => setItemAddedName(val)}
            />
            <h4>Quantidade:</h4>
            <Input
              value={itemAddedQtd}
              OnChange={(val) => setItemAddedQtd(val)}
            />
          </div>
        </div>
        <button onClick={addItem}>
          <p>Adicionar</p>
          <PlusSquareFill />
        </button>
      </div>
    </Styled.ListEditWrapper>
  );
};
