import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './components/TodoInput';
import TodoList from './components/Todolist';



function App() {
  return (
    <div className="App">
     <TodoInput></TodoInput>
     <TodoList></TodoList>
    
    </div>
  );
}

export default App;
