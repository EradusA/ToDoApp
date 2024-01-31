import { useState, useEffect } from "react";

const useToDoList = () => {
  const storedList = localStorage.getItem("list");
  const parsedLocalStorageList = storedList ? JSON.parse(storedList) : [];
  const [list, setList] = useState(parsedLocalStorageList);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const filterItems = (searchTerm) => {
    return list.filter((item) =>
      item.content.toLowerCase().startsWith(searchTerm.toLowerCase()),
    );
  };

  const toDoItems = list.filter((item) => !item.completed);
  const doneItems = list.filter((item) => item.completed);

  const addItem = (taskName) => {
    const itemToAdd = {
      id: Date.now(),
      content: taskName,
      completed: false,
    };
    setList([...list, itemToAdd]);
  };

  const delItem = (delKey) => {
    const newList = list.filter((val) => val.id !== delKey);
    setList(newList);
  };

  const updateItem = (needle) => {
    const newList = list.map((item) =>
      item.id === needle ? { ...item, completed: !item.completed } : item,
    );
    setList(newList);
  };

  const editItem = (id, newContent) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, content: newContent } : item
    );
    setList(newList);
  };

  return {
    toDoItems,
    filterItems,
    doneItems,
    addItem,
    delItem,
    updateItem,
    editItem,
  };
};

export default useToDoList;
