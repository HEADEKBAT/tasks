import { FC, useState, useCallback, useRef, useEffect } from 'react';
import { List } from './List';
import { Product } from './types';

export const App: FC = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [items, setItems] = useState<Product[]>([
    { name: 'Coffee', price: 10 },
    { name: 'Tea', price: 20 },
    { name: 'Milk', price: 30 },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Функция, добавляющая новый элемент в список items.
  // Используем useCallback и включаем fieldValue в массив зависимостей.
  const onAdd = useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();

      // Если значение поля не пустое, добавляем новый элемент
      if (fieldValue.trim()) {
        setItems((prevItems) => [
          ...prevItems,
          { name: fieldValue, price: 0 },
        ]);
        setFieldValue(''); // очищаем поле ввода
      }
    },
    [fieldValue]
  );

  // Фокусируем поле ввода при монтировании компонента
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Функция удаления элемента (если требуется)
  const deleteItem = (nameToDelete: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.name !== nameToDelete)  
    );
  };

  return (
    <>
      <input
        type="text"
        id="input"
        ref={inputRef}
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />

      <button type="button" onClick={onAdd}>
        add
      </button>

      <List items={items} deleteItem={deleteItem} />
    </>
  );
};
