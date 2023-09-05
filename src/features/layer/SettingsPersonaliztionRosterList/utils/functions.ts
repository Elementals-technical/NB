import { inputT } from './types';

export const addObjectWithAutoId = (array: inputT[]): inputT[] => {
  let maxId;
  if (array.length === 0) {
    maxId = 0;
  } else {
    maxId = Math.max(...array.map((item) => item.id)) + 1;
  }
  const newItem: inputT = {
    id: maxId,
    show: false,
    name: undefined,
    number: undefined,
  };
  return [...array, newItem];
};

export const removeObjectById = (
  array: inputT[],
  idToRemove: number
): inputT[] => {
  // Фильтруем массив, удаляя элемент с заданным id
  const newArray = array.filter((item) => item.id !== idToRemove);

  return newArray;
};

export const updateObjectById = (
  array: inputT[],
  idToUpdate: number,
  updatedValues: Partial<inputT>
): inputT[] => {
  return array.map((item) => {
    if (item.id === idToUpdate) {
      return {
        ...item,
        ...updatedValues,
      };
    }
    return item;
  });
};

export const resetShowProperty = (array: inputT[]): inputT[] => {
  // Создаем новый массив, в котором у всех объектов свойство show устанавливается в false
  const updatedArray = array.map((item) => ({ ...item, show: false }));
  return updatedArray;
};

export function genEmptyValues(value: number) {
  const values: inputT[] = [];
  for (let i = 0; i < value; i++) {
    values.push({
      id: i,
      show: false,
      name: '',
      number: '',
    });
  }
  return values;
}
