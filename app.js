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

const items = document.getElementsByClassName('list-group-item');
console.log(items);