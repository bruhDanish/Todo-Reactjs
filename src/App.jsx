import { useState } from 'react';
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'

function App() {
  const [list, setList] = useState([
    {id: 1, todoData: 'task1', finished: false},
    {id: 2, todoData: 'task2', finished: false},
  ]) ;

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo updateList= {(todo) => setList([
        ...list,
        {
          id: list.length + 1,
          todoData: todo,
          finished: false
        }
      ])} />
      <TodoList list= {list} updateList= {setList} />
    </>
  )
}

export default App
