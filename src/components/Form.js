// import React from 'react';
// import React from 'react'

const Form = ({ setInputActivity, setInputDate, todos, setTodos, InputActivity, InputDate }) => {
	const InputactivityHandler = (e) => {
		console.log(e.target.value);
		setInputActivity(e.target.value);
		// setInputDate(e.target.value);
	};

	const InputdateHandler = (e) => {
		console.log(e.target.value);
		setInputDate(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ activity: InputActivity, date: InputDate, id: Math.random() * 100 },
		]);
		
		setInputActivity("");
		setInputDate("");
	};

	return (
		<div>
			<form action="">
				<label>Activity:</label>
				<input
					value={InputActivity}
          onChange={InputactivityHandler}
					type="text"
					className="todo-input activity"
				/>
				<label>Date:</label>
				<input
					value={InputDate}
          onChange={InputdateHandler}
					type="text"
					className="todo-input date"
				/>
				<button
					onClick={submitTodoHandler}
					className="todo-button"
					type="submit"
				>
					Submit
				</button>
				<i className="fas fa-plus-square"></i>
			</form>
		</div>
	);
};

export default Form;
