import { useState } from "react";

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

export default ToDoItem;
