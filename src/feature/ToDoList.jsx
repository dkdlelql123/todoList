import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, btnDeleteToDoList, btnchangeToDoList }) => {
  return (
    <div id="toDoList">
      {todos.length === 0 && (
        <h3 className="flex justify-center text-white my-6 font-bold">
          할일을 작성해주세요.
        </h3>
      )}
      <ul className="flex flex-col-reverse items-center mt-8 gap-6 md:max-w-[400px] md:mx-auto md:gap-4">
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

export default ToDoList;
