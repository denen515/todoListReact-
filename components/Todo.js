// import React from "react";
import { FaTrash } from "react-icons/fa";
const Todo = () => {
	return (
		<div>
			<div className="todo">
				<li className="todo-item">
					<p className="for-activity">Hello</p>
					<p className="for-date">Dave</p>
				</li>
				<button className="delete-btn">
					<FaTrash />
				</button>
			</div>
		</div>
	);
};

export default Todo;
