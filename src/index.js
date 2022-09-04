import './style.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/components';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList);

// const tarea = new Todo('Aprender');
// todoList.nuevoTodo( tarea );

// console.log(todoList);

// crearTodoHtml( tarea );


//local storage aguanta un reinicio de la computadora, guardar informacion para la aplicacion (no contraseña)
//Session storage se va a borrar todo cuando se cierra el navegador web

// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');

// setTimeout(() =>{
    
//     localStorage.removeItem('mi-key')

// }, 1500);


