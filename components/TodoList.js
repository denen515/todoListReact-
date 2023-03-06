// import React from 'react';
import Todo from "./Todo";
// import { FaTrash } from 'react-icons/fa';

const TodoList = (todos) => {
  // console.log(todos);
  return (
    <div>
        <div className="todo-container">
			<ul className="todo-list">
        
          {todos.map((todo) => (
          <Todo/>))};
			</ul>
		</div>
    </div>
  )
}

export default TodoList