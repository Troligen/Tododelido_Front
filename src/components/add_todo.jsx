import { useState } from "react";

const AddTodo = ({ todo, setTodo }) => {
  const [userInput, setUserInput] = useState("")

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        const todoObject = { task: userInput, status: false }
        setTodo(...todo, todoObject)
      }}>
        <input placeholder="What ya need to do?" value={userInput} type="text" className="w-98" onChange={(e) => {
          setUserInput(e.target.value)
        }} />
      </form>
    </>
  )
};

export default AddTodo
