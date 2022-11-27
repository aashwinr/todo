import React from 'react';
import ListNameButton from './ListNameButton';

function ListNames({listNames, chosenList, setChosenList}) {
	const changeChosenList = (event) => {
		const listName = event.target.innerHTML;
		setChosenList(listName);
	}
	return (<section className="list-names">
		<ul>
			{
				listNames.map(listName => {
					return <ListNameButton key={listName} chosenList={chosenList} buttonContents={listName} onClick={changeChosenList} />
				})
			}
		</ul>
	</section>);
}

export default ListNames;

`
Object Definitions
Storage {
	listNames: [ String ]
	listItems: ListItems
}

ListItems {
	'<list-name>': {
		content: String
		completed: Bool
	}
}
`