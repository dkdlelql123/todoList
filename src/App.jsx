import { useState } from "react";
import { atom, useRecoilState } from "recoil";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-b from-purple-400 to-blue-400 pt-8">
        <ToDoList />
      </div>
    </div>
  );
}

const ToDoForm = ({ newToDoTitle, setNewToDoTitle, btnAddToDoList }) => {
  return (
    <div id="toDoListForm" className="flex items-center justify-center">
      <input
        type="text"
        placeholder="할일을 작성해주세요"
        value={newToDoTitle}
        onChange={(e) => setNewToDoTitle(e.target.value)}
        className="input input-md"
      />
      <button onClick={btnAddToDoList} className="btn btn-md ml-2 btn-primary">
        할일추가
      </button>
    </div>
  );
};

const ToDoLists = ({ todos, btnDeleteToDoList, btnchangeToDoList }) => {
  return (
    <div id="toDoList">
      {todos.length === 0 && (
        <h3 className="flex justify-center text-white my-6 font-bold">
          할일을 작성해주세요.
        </h3>
      )}
      <ul className="flex flex-col-reverse items-center mt-8">
        {todos.map((todo, i) => (
          <ToDoItem
            key={i}
            num={i}
            todo={todo}
            btnDeleteToDoList={btnDeleteToDoList}
            btnchangeToDoList={btnchangeToDoList}
          />
        ))}
      </ul>
    </div>
  );
};

const ToDoItem = ({ num, todo, btnDeleteToDoList, btnchangeToDoList }) => {
  const [title, setTitle] = useState(todo.title);
  const [editMode, setEditMode] = useState(false);

  const btnEditModeChangeClicked = () => {
    setEditMode(false);
    btnchangeToDoList(todo.id, title);
  };

  const btnEditModeCancleClicked = () => {
    setEditMode(false);
    setTitle(todo.title);
  };

  const btnStyle =
    "text-white border border-white rounded py-1 px-1 ml-2 text-sm hover:bg-white hover:text-black transition duration-400";

  return (
    <li className="mb-2 flex items-center justify-start w-6/12">
      <span className="text-white">{num}_</span>
      &nbsp;
      {editMode == false ? (
        <>
          <strong className="text-white">{todo.title}</strong>
          <button onClick={() => setEditMode(true)} className={btnStyle}>
            수정
          </button>
          <button
            onClick={() => {
              btnDeleteToDoList(todo.id);
              // console.log(todo.id)
            }}
            className={btnStyle}
          >
            삭제
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-sm"
          />
          <button onClick={btnEditModeChangeClicked} className={btnStyle}>
            수정완료
          </button>
          <button onClick={btnEditModeCancleClicked} className={btnStyle}>
            수정취소
          </button>
        </>
      )}
    </li>
  );
};

const todosState = atom({
  key: "todosState",
  default: [],
});

const ToDoList = () => {
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
    // console.log(deleteIdx)
    setTodos(todos.filter((el, i) => el.id != deleteIdx));
  };

  return (
    <>
      <ToDoForm
        newToDoTitle={newToDoTitle}
        setNewToDoTitle={setNewToDoTitle}
        btnAddToDoList={btnAddToDoList}
      />

      <ToDoLists
        todos={todos}
        btnchangeToDoList={btnchangeToDoList}
        btnDeleteToDoList={btnDeleteToDoList}
      />
    </>
  );
};

export default App;
/*
 

export default ToDoList ;

*/
