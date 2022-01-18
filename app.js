//To stop form from refreshing

function formHandler(event) {
    event.preventDefault();
}

const entireForm = document.getElementById('form-one');
entireForm.addEventListener('submit', formHandler);

//The actual function and code
const results = document.getElementById('result');

function nodeConnector() {
    let nodes = document.getElementById('nodes-input').value;
    nodes = JSON.parse(nodes);
    let bonds = 0;
    const limit = nodes;

    for (let i = 1; i < limit; i++) {
        bonds = nodes * (nodes - 1) / 2;
    }

    console.log(nodes, bonds);
    return results.innerHTML = `For ${nodes} node(s), you will need ${bonds} bond(s).`;
}
