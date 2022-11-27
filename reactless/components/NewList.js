class NewList extends HTMLElement {
	constructor() {
		super(); 
		// <button class="new-list-button list-name">+ List</button>
		this.shadow = this.attachShadow({'mode':'open'});
		const addButton = document.createElement('button');
		addButton.className = 'new-list-button list-name';
		addButton.innerHTML = '+ List';
		
		const stylesheetLink = document.createElement('link');
		stylesheetLink.rel = 'stylesheet';
		stylesheetLink.href = '../styles.css';
		this.shadow.append(addButton, stylesheetLink);
	}
}

customElements.define('new-list', NewList);