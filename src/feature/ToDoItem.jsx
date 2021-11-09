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
    "text-white border border-white rounded py-1 px-1 text-xs hover:bg-white hover:text-black transition duration-400";

  return (
    <li className="mb-2 flex flex-col flex-grow min-w-full px-4 gap-2">
      <div className="flex flex-1 align-center">
        <span className="text-white mr-[8px]">{num}</span>
        {editMode == false ? (
          <div className="text-white flex flex-1">{todo.title}</div>
        ) : (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-sm flex flex-1"
          />
        )}
      </div>
      <div className="flex gap-2 ">
        {editMode == false ? (
          <>
            <button onClick={() => setEditMode(true)} className={btnStyle}>
              수정
            </button>
            <button
              onClick={() => {
                btnDeleteToDoList(todo.id);
              }}
              className={btnStyle}
            >
              삭제
            </button>
          </>
        ) : (
          <>
            <button onClick={btnEditModeChangeClicked} className={btnStyle}>
              수정완료
            </button>
            <button onClick={btnEditModeCancleClicked} className={btnStyle}>
              수정취소
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default ToDoItem;
