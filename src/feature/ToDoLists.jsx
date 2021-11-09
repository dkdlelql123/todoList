import { useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
const { persistAtom } = recoilPersist();

const todosState = atom({
  key: "todosState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

const ToDoLists = () => {
  const [newToDoTitle, setNewToDoTitle] = useState("");
  const [lastTodoId, setLastTodoId] = useState(0);
  const [todos, setTodos] = useRecoilState(todosState);

  const btnAddToDoList = () => {
    if (!newToDoTitle) return;
    const newTodo = {
      id: lastTodoId,
      title: newToDoTitle,
    };

    setTodos([...todos, newTodo]);
    setNewToDoTitle("");
    setLastTodoId(newTodo.id + 1);
  };

  const btnchangeToDoList = (changeIdx, newText) => {
    const newTodo = {
      id: changeIdx,
      title: newText,
    };

    setTodos(todos.map((el, i) => (i == changeIdx ? newTodo : el)));
  };

  const btnDeleteToDoList = (deleteIdx) => {
    setTodos(todos.filter((el, i) => el.id != deleteIdx));
  };

  return (
    <>
      <ToDoForm
        newToDoTitle={newToDoTitle}
        setNewToDoTitle={setNewToDoTitle}
        btnAddToDoList={btnAddToDoList}
      />

      <ToDoList
        todos={todos}
        btnchangeToDoList={btnchangeToDoList}
        btnDeleteToDoList={btnDeleteToDoList}
      />
    </>
  );
};

export default ToDoLists;
