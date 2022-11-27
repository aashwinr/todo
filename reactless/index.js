const main = () => {
  const listNamesDiv = document.querySelector('.lists');
  const data = localStorage.getItem('list-names');
  const listNames = document.createElement('list-names');
  listNames.data = JSON.parse(data);
  listNamesDiv.append(listNames, document.createElement('new-list'));
  console.log(listNames.shadowRoot)
}
main();

// One liner for making the .resizable selector resizable
interact('.resizable') .resizable({ edges: { top: false, left: false, bottom: false, right: true }, listeners: { move: function (event) { let { x, y } = event.target.dataset; x = (parseFloat(x) || 0) + event.deltaRect.left; y = (parseFloat(y) || 0) + event.deltaRect.top; Object.assign(event.target.style, { width: `${event.rect.width}px`, height: `${event.rect.height}px`, transform: `translate(${x}px, ${y}px)` }); Object.assign(event.target.dataset, { x, y }); } }, modifiers: [ interact.modifiers.restrictRect({ restriction: 'parent' }) ] })