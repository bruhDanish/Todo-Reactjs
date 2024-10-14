import { useState } from 'react';
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
import TodoContext from './context/TodoContext'

function App() {
  const [list, setList] = useState([]) ;
  return (
    <TodoContext.Provider value={{list, setList}}>
      <h1>Todo List</h1>
      <AddTodo updateList= {(todo) => setList([
        ...list,
        {
          id: list.length + 1,
          todoData: todo,
          finished: false
        }
      ])} />
      <TodoList  />
    </TodoContext.Provider>
  )
}

export default App
