// -------- пошук елемент на сторінці
const tBody = document.querySelector('table tbody');
const addBtn = document.querySelector('#add-btn');
const clearBtn = document.getElementById('clear-btn');
const searchBtn = document.getElementById('search-btn');

const form = document.forms.createProduct;
const nameIn = form.elements.model;
const priceIn = form.elements.price;
const statusCh = form.elements.status;

const products = [];

addBtn.onclick = (event) => {

    event.preventDefault();

    // створюємо новий елемент, отримуючи дані з полів на формі
    let item = new Product(nameIn.value, +priceIn.value, statusCh.checked);
    // додаємо в масив
    products.push(item);

    console.log("New item:", item);

    // додаємо в таблицю
    addProductToTable(item);
}

clearBtn.onclick = () => {
    // очищаємо вміст таблиці
    tBody.innerHTML = "";
}

searchBtn.onclick = () => {
    event.preventDefault();

    // відображаємо лише доступні на складі продукти
    loadProductsToTable(products.filter(x => x.status == true));
}

function addProductToTable(item) {
    tBody.innerHTML += `<tr>
                            <th scope="row">${item.id}</th>
                            <td>${item.name}</td>
                            <td>${item.price}$</td>
                            <td>
                                ${item.status
            ? '<span class="badge text-bg-success">In Stock</span>'
            : '<span class="badge text-bg-secondary">Out of Stock</span>'
        }                      
                            </td>
                        </tr>`;
}

function loadProductsToTable(items) {
    tBody.innerHTML = "";

    for (const i of items) {
        addProductToTable(i);
    }
}

class Product {
    static count = 0;

    constructor(name, price, status) {
        this.name = name;
        this.price = price;
        this.status = status;
        this.id = ++Product.count;
    }
}