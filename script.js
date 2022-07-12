class MyWebComp extends HTMLElement {

    connectedCallback() {
        let tplEl = document.querySelector("#btn-add");
        this.attachShadow({mode: "open"});
        let html = document.importNode(tplEl.content, true)
        this.shadowRoot.appendChild(html)
    }
}

customElements.define("my-webcomp", MyWebComp)

//открытие и закрытие окна добавления цвета
let button = document.getElementById('showHideDiv');
button.onclick = function () {
    let div = document.getElementById('popupFrame');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
};

// Шапка таблицы и добавления в HTML
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('table-body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Цвет";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Название";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Тип";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Код";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Изменить";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "Удалить";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
thead.appendChild(row_1);

