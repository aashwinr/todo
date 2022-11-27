import ListNames from './components/ListNames';

import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)
	const [lists, setLists] = useState(['hello','world','this','is','a','list']);
	const [chosenList, setChosenList] = useState('hello');
	return (
		<main>
			<h2>Todo List</h2>
			<div className='todo'>
				<ListNames listNames={lists} chosenList={chosenList} setChosenList={setChosenList}/>
				{/* <CurrentList /> */}
			</div>
		</main>
	)
}

export default App;