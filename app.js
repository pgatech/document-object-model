// Document getElementById
// console.log(document.getElementById('task-title'));

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// // Change Syling with JavaScript
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';

// // Change Content Coding
// document.getElementById('task-title').textContent = 'Todo List';

// // Mencoba menggunakan Variabel

// const cardHeader = document.getElementById('task-title');
// cardHeader.textContent = 'My Todo List';

// // document.querySelector();
// console.log(document.querySelector('#task-title'));

// document.querySelector('li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'green'; //Pseudo Classes
// document.querySelector('li:nth-child(2)').textContent = 'Create Task DOM in Vanilla JavaScript'; 


// document.getElementsByClassName

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[2].textContent = 'Hello World';

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);

// // Convert HTML to Array
// lis = Array.from(lis);

// lis.forEach(function (li, index){
//     li.textContent = `${index} : Hello`;
// });

// console.log(lis);



// Perulangan dengan forEach dan For
// const items = document.querySelectorAll('ul.list-group li.list-group-item');

// items.forEach(function(item, index) {
//     item.textContent = `${index} : Hello JavaScript`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even');

// liOdd.forEach(function(li, index) {
//     li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

// Create Element 
const li = document.createElement('li');

// Add Class
li.className = 'list-group-item';

// Add ID
li.id = 'new-item';

// Add Attribute
li.setAttribute('title', 'New Item');

// Add inner HTML
li.innerHTML = '<button class="float-right btn btn-danger btn-sm delete-item"><i class="fa fa-trash" aria-hidden="true"></i></button>';

// append text node
li.appendChild(document.createTextNode ('Hello World'));

// Add Element li ke ul - Append Child
document.querySelector('ul.list-group').appendChild(li);

console.log(li);