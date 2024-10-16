import { useReducer } from 'react';
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
import TodoContext from './context/TodoContext'
import TodoDispatchContext from './context/TodoDispatchContext';
import todoReducer from './reducers/todoReducer'

function App() {
  // const [list, setList] = useState([]) ;
  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList  />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
