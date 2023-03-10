import { FaTrash } from "react-icons/fa";

const Todo = ({ todo, handleDelete }) => {	
	return (
		<li className="todo">
			<div>
				<p className="for-activity">{todo.activity}</p>
				<p className="for-date">{todo.date}</p>
			</div>
			<button className="delete-btn" onClick={() => handleDelete(todo.id)}>
				<FaTrash />
			</button>
		</li>
	)
}

export default Todo;
