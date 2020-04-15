import { v4 as uuidv4 } from 'uuid'


// setup the empty todos array
let todos = []

// loadTodos
//  argument :  none
// return value :  none
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// saveTodos
// arguments : none
// return value : none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// arguments : none 
// return value : todos array
const getTodos = () => todos

// createTodo
// arguments : todo text
// return value : none
const createTodo = (text) => {
    const id = uuidv4()
    
    todos.push({
        id: id,
        text,
        completed: false
    })
    saveTodos()
}

// removeTodo
// arguments : id of todo to remove
// return value :  none
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// toggleTodo
// arguments : id of todo to toggle
// return value :none
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

// call loadTodos  and setup the exports 
loadTodos()

export {getTodos, createTodo, removeTodo, toggleTodo, loadTodos }