class ListNames extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ 'mode': 'open' });
        const root = document.createElement('div');
        const mainList = document.createElement('ul');
        const styleLink = document.createElement('link');
        styleLink.href = '../styles.css';
        styleLink.rel = 'stylesheet';
        root.append(mainList, styleLink);
        this.shadow.append(root);
    }

    /**
     * @typedef {Array} listNames
     */
    /**
     * @param {listNames} names
     */
    set data(names) {
        const mainList = this.shadow.querySelector('ul');
        names.map(name => {
            const newListItem = document.createElement('li');
            const buttonItem = document.createElement('button');
            buttonItem.className = 'list-name';
            buttonItem['data-selected'] = 'false';
            buttonItem.innerHTML = name;
            newListItem.append(buttonItem);
            mainList.append(newListItem);
        });
    }
}

customElements.define('list-names', ListNames);