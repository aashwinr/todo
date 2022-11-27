import { useEffect, useState } from "react";

function ListNameButton({ buttonContents, chosenList, onClick }) {
	const [className, setClassName] = useState('list-name-button');
	useEffect(_ => {
		if (buttonContents == chosenList) {
			setClassName('list-name-button chosen-list');
		} else {
			setClassName('list-name-button');
		}
	}, [chosenList]);
	return (<button className={className} onClick={onClick}>
		{buttonContents}
	</button>);
}

export default ListNameButton;