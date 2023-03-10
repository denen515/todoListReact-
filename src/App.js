import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [InputActivity, setInputActivity] = useState("");
	const [InputDate, setInputDate] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="App">
			<header>
				<h1>Denen's todoList</h1>
			</header>
			<Form
				InputActivity={InputActivity}
				InputDate={InputDate}
				todos={todos}
				setTodos={setTodos}
				setInputActivity={setInputActivity}
				setInputDate={setInputDate}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
