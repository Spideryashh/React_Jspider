import { createContext, useState } from "react";

export const TodoStore = createContext([]);

const TodoContext = ({ children }) => {
  //! Basic requirements
  const [todolist, setTodolist] = useState([]);

  //! Overlay States
  //? States to handle Read overlay
  const [showreadoverlay, setShowreadOverlay] = useState(false);
  const [showTodoData, setShowTodoData] = useState({});

  //? States to handle Delete overlay
  const [showdeleteoverlay, setShowdeleteOverlay] = useState(false);
  // we will use deletetodo state to store id of todo that we want to delete!
  const [deletetodo, setDeleteTodo] = useState(false);

  // if we need changes , we will do while working on project
  const handleAddTodo = ({
    title,
    details,
    n_characters,
    n_sentences,
    n_words,
  }) => {
    console.log(title, details, n_characters, n_words, n_sentences);
    setTodolist([
      ...todolist,
      {
        id: `${new Date()}`,
        title,
        details,
        n_characters,
        n_words,
        n_sentences,
        createdAt: `Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`,
      },
    ]);
  };
  const handleReadTodo = () => {};

  const handleDeleteTodo = id => {
    console.log("handleDeleteTodo id : ", id);
    setTodolist(todolist.filter(value => value.id != id));
    setShowdeleteOverlay(false);
    setShowreadOverlay(false);
  };

  const handleUpdateTodo = () => {};
  // control extra screen

  const handleReadOverlay = id => {
    console.log(id);
    const data = todolist.filter(value => value.id === id);
    setShowTodoData({ ...data[0] });
    setShowreadOverlay(true);
  };

  return (
    <TodoStore.Provider
      value={{
        todolist,
        handleAddTodo,
        handleDeleteTodo,
        handleReadTodo,
        handleUpdateTodo,
        handleReadOverlay,
        showTodoData,
        showreadoverlay,
        setShowreadOverlay,
        deletetodo,
        showdeleteoverlay,
        setShowdeleteOverlay,
        setDeleteTodo,
      }}
    >
      {children}
    </TodoStore.Provider>
  );
};

export default TodoContext;