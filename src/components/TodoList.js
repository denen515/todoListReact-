// import React from 'react';
import Todo from "./Todo";
// import { FaTrash } from 'react-icons/fa';

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
	}

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map(todo => <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />)}
        </ul>
		  </div>
    </div>
  )
}

export default TodoList