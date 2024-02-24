const form = document.forms.mainForm;
const textInput = form.elements.title;
const list = document.querySelector("ul");

const itemsKey = "list-items";
let items = [];

form.onsubmit = (e) => {
    e.preventDefault();

    let item = textInput.value;

    items.push(item)
    addItem(item);
};

function save() {
    localStorage.setItem(itemsKey, JSON.stringify(items));
}

function load() {
    items = JSON.parse(localStorage.getItem(itemsKey));

    list.innerHTML = "";
    items.forEach(x => addItem(x));
}

function addItem(i) {
    list.innerHTML += `<li>${i}</li>`
}

saveBtn.onclick = () => save();
loadBtn.onclick = () => load();