import React, { useState } from 'react';
import './App.css';

import CreateForm from './CreateForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos([...todos, newTodo])
  }

  // We numbered the props all the way down to see how they match up
  const deleteTodo1 = todoText => {
    setTodos(todos.filter(todo => todo.text !== todoText));
  }

  return (
    <section className="App">
      <h1>Casey's Todo List</h1>
      <CreateForm addTodo={addTodo} />

      <TodoList todos={todos} deleteTodo2={deleteTodo1} />

    </section>
  );
}

export default App;
