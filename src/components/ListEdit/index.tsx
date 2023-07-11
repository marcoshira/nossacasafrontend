import { Item, List } from '@/sharedTypes';
import * as Styled from './styles';
import { Input } from '../Input';
import { Trash, PlusSquareFill } from '@styled-icons/bootstrap';
import { useState, useEffect } from 'react';
import { setupAPIClient } from '@/services/api';

export type ListEditProps = {
  data: List;
  show: boolean;
  onSubmit?: (data: List) => void;
};
export const ListEdit = ({ data, show, onSubmit }: ListEditProps) => {
  const [tempId, setTempId] = useState('0');
  const [list, setList] = useState<List>(data);
  const [listName, setListName] = useState(data.name);
  const [itemsToDel, setItemsToDel] = useState<string[]>([]);
  const [itemsToEdit, setItemsToEdit] = useState<Item[]>([]);
  const [itemsToAdd, setItemsToAdd] = useState<Item[]>([]);
  const [itemAddedName, setItemAddedName] = useState('');
  const [itemAddedQtd, setItemAddedQtd] = useState('');
  const [slideUp, setSlideUp] = useState<number>();

  useEffect(() => {
    setList(data);
  }, [data, show]);

  const handleClick = async () => {
    try {
      const apiClient = setupAPIClient(undefined);

      const newList = await apiClient.put(
        '/list',
        {
          name: listName,
          items: itemsToEdit,
          itemsToDelete: itemsToDel,
          itemsToAdd: itemsToAdd,
        },
        { params: { listId: list.id } },
      );

      if (onSubmit) {
        onSubmit(newList.data);
      }
      // if (data.items) {
      //   data.items.map((item) => {
      //     console.log('name: ' + item.name);
      //     console.log('quantity: ' + item.quantity);
      //   });
      // }
      // console.log('///////////');
      setList(data);
      setListName(list.name);
      setItemsToEdit([]);
      setItemsToDel([]);
      setItemsToAdd([]);
      setItemAddedName('');
      setItemAddedQtd('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputNameChange = (val: string, index: number, id: string) => {
    if (list.items) {
      const updatedListItems = [...list.items];
      const updatedItem = { ...updatedListItems[index], name: val };
      updatedListItems[index] = updatedItem;

      const updatedList = { ...list, items: updatedListItems };

      setList(updatedList);

      const updatedItemsToAdd = [...itemsToAdd];

      const itemAlreadyAdded = updatedItemsToAdd.find((obj) => obj.id === id);

      if (itemAlreadyAdded) {
        itemAlreadyAdded.name = val;
        setItemsToAdd(updatedItemsToAdd);
      } else {
        const updatedItemsToEdit = [...itemsToEdit];
        const itemAlreadyEdited = updatedItemsToEdit.findIndex(
          (obj) => obj.id === id,
        );

        if (itemAlreadyEdited !== -1) {
          updatedItemsToEdit[itemAlreadyEdited].name = val;
        } else {
          updatedItemsToEdit.push({
            id: list.items[index].id,
            name: val,
            quantity: list.items[index].quantity,
          });
        }
        setItemsToEdit(updatedItemsToEdit);
      }
    }
  };

  const handleInputQtdChange = (val: string, index: number, id: string) => {
    if (list.items) {
      const updatedListItems = [...list.items];
      const updatedItem = { ...updatedListItems[index], quantity: val };
      updatedListItems[index] = updatedItem;

      const updatedList = { ...list, items: updatedListItems };

      setList(updatedList);

      const updatedItemsToAdd = [...itemsToAdd];

      const itemAlreadyAdded = updatedItemsToAdd.find((obj) => obj.id === id);

      if (itemAlreadyAdded) {
        itemAlreadyAdded.quantity = val;
        setItemsToAdd(updatedItemsToAdd);
      } else {
        const updatedItemsToEdit = [...itemsToEdit];
        const itemAlreadyEdited = updatedItemsToEdit.findIndex(
          (obj) => obj.id === id,
        );

        if (itemAlreadyEdited !== -1) {
          updatedItemsToEdit[itemAlreadyEdited].quantity = val;
          setItemsToEdit(updatedItemsToEdit);
        } else {
          updatedItemsToEdit.push({
            id: list.items[index].id,
            name: list.items[index].name,
            quantity: val,
          });
          setItemsToEdit(updatedItemsToEdit);
        }
      }
    }
  };

  const addItem = () => {
    const newTempId = tempId;
    const itemToAddName = itemAddedName;
    const itemToAddQtd = itemAddedQtd;

    setItemAddedName('');
    setItemAddedQtd('');

    setTempId((parseInt(tempId) + 1).toString());

    const itemToAdd = {
      id: newTempId,
      name: itemToAddName,
      quantity: itemToAddQtd,
    };

    const updatedItemsToAdd = [...itemsToAdd, itemToAdd];
    setItemsToAdd(updatedItemsToAdd);

    if (list.items) {
      const updatedListItems = [...list.items, itemToAdd];

      const updatedList = { ...list, items: updatedListItems };

      setList(updatedList);
    }
  };

  const deleteItem = (id: string, index: number) => {
    if (list.items) {
      const updatedListItems = [...list.items];
      updatedListItems.splice(index, 1);

      const updatedList = { ...list, items: updatedListItems };

      setList(updatedList);
    }

    const itemAlreadyAdded = itemsToAdd.findIndex((obj) => obj.id === id);

    if (itemAlreadyAdded !== -1) {
      const updatedItemsToAdd = [...itemsToAdd];
      updatedItemsToAdd.splice(itemAlreadyAdded, 1);
      setItemsToAdd(updatedItemsToAdd);
    } else {
      const updatedItemsToDel = [...itemsToDel, id];
      setItemsToDel(updatedItemsToDel);
    }

    setSlideUp(index);
    setTimeout(() => {
      setSlideUp(undefined);
    }, 320);
  };

  return (
    <Styled.ListEditWrapper show={show} className={slideUp ? 'extraPad' : ''}>
      <h3>Nome:</h3>

      <Input
        value={listName}
        OnChange={(val) => setListName(val)}
        child={<Trash />}
      />

      {list.items &&
        list.items.map((item, index) => {
          return (
            <div
              className={
                slideUp !== undefined && index >= slideUp
                  ? 'itemsEdit slide-up'
                  : 'itemsEdit'
              }
              key={index}
            >
              <div className="title">
                <h3>Item {index + 1}:</h3>
                <a onClick={() => deleteItem(item.id, index)}>
                  <Trash />
                </a>
              </div>

              <div className="items">
                <h4>Nome:</h4>
                <Input
                  value={item.name}
                  OnChange={(val) => handleInputNameChange(val, index, item.id)}
                />
                <h4>Quantidade:</h4>
                <Input
                  value={item.quantity ? item.quantity : ''}
                  OnChange={(val) => handleInputQtdChange(val, index, item.id)}
                />
              </div>
            </div>
          );
        })}

      <div className="addItem slide-up">
        <div className="itemAdded">
          <div className="title">
            <h3>Adicionar Item:</h3>
          </div>

          <div className="items">
            <h4>Nome:</h4>
            <Input
              value={itemAddedName}
              OnChange={(val) => setItemAddedName(val)}
              prefilled={false}
            />
            <h4>Quantidade:</h4>
            <Input
              prefilled={false}
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
      <button onClick={handleClick} className="submit slide-up">
        Salvar Mudanças
      </button>
    </Styled.ListEditWrapper>
  );
};
