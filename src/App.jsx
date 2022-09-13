import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	incrementByAmount,
	checkHttpReq,
} from './redux/slices/counterSlice';
import { addToDo } from './redux/slices/todoSlice';

function App() {
	const loading = useSelector((state) => state.counter.loading);
	const count = useSelector((state) => state.counter.value);
	const todoList = useSelector((state) => state.todoList);
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	return (
		<div>
			Hello world {count} {loading.toString()} <br />
			{todoList.map((el) => (
				<li key={el.id}>{el.text}</li>
			))}
			<button onClick={() => dispatch(increment())}>Increment</button>{' '}
			<br />
			<button onClick={() => dispatch(decrement())}>
				Decrement
			</button>{' '}
			<br />
			<button onClick={() => dispatch(incrementByAmount(4))}>
				Increment By Value
			</button>{' '}
			<br />
			<input
				type="text"
				value={text}
				onChange={(el) => setText(el.target.value)}
			/>
			<button onClick={() => dispatch(addToDo(text))}>Add Text</button>
			<button onClick={() => dispatch(checkHttpReq())}>Request</button>
		</div>
	);
}

export default App;
