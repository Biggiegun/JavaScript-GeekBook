const arreglo = [1,2,3]

const newItem1 = document.createElement('li');
const newItem2 = document.createElement('li');
const newItem3 = document.createElement('li');

const newContent1 = document.createTextNode(arreglo[0]);
const newContent2 = document.createTextNode(arreglo[1]);
const newContent3 = document.createTextNode(arreglo[2]);

newItem1.appendChild(newContent1);
newItem2.appendChild(newContent2);
newItem3.appendChild(newContent3);

const items = document.querySelector('.items');
items.appendChild(newItem1);
items.appendChild(newItem2);
items.appendChild(newItem3);
