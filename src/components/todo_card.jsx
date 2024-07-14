const TodoCard = ({ todo, setTodo }) => {

  return (
    <>
      <div className="flex justify-center text-center w-96 h-96 rounded-md bg-white shadow-md p-5 mt-2">
        <ul>
          {todo.map((item, index) => {
            return (
              <>
                <li key={item.task}>
                  {item.task}
                </li>
                <input type="checkbox" checked={item.status} onClick={() => {

                }} />
              </>
            )
          })}
        </ul>

      </div>
    </>
  )
};

export default TodoCard;
