import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList(){

    const {list} = useContext(TodoContext);
    const {dispatch} = useContext(TodoDispatchContext);

    function onFinished(todo, isFinished){
       dispatch({type: `finished_todo`, payload:{todo, isFinished:isFinished}})
    };

    function onDelete(todo){
        dispatch({type: `delete_todo`, payload:{todo}})
    }

    function onEdit(todo, todoText){
        dispatch({type: `edit_todo`, payload:{todoText, todo}})
    }

    return(
        <div>
            {list.length > 0 && 
            list.map(todo =>
                <Todo 
                    key={todo.id} 
                    todoData={todo.todoData} 
                    isFinished={todo.finished} 
                    id={todo.id}
                    changeFinished = {(isFinished) => onFinished(todo, isFinished)}
                    onDelete = {() => onDelete(todo)}
                    onEdit = {(todoText) => onEdit(todo, todoText)}
                />
                )
            }
        </div>
    )
}

export default TodoList;