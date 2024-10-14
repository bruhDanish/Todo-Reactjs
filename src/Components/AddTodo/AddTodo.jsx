import { useState } from "react";

function AddTodo({updateList}){
    const [inputText, setInputText] = useState('');

    return(
        <div>
            <input 
                placeholder="add your next task"
                value={inputText}
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                />
            <button onClick={() => {
                updateList(inputText);
                setInputText('');
                }}>Add</button>
        </div>
    )
}

export default AddTodo;