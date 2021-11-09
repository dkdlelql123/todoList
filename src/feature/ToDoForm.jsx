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
export default ToDoForm;
