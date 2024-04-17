import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, statusTodo } from '../redux/Todoslice';

const Todolist = () => {
    const todos=useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    const [text,setText] = useState("");
    const handleInputchange= (e)=>{
        setText(e.target.value);
    }
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (text) {
          dispatch(addTodo(text));
          setText("");
        }
      };
    const handleDeleteTodo = (id) =>{
        dispatch(deleteTodo(id));
    }

    const handleChangeTOdo = (id) =>{
        dispatch(statusTodo(id));
    }

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleAddTodo} className="flex items-center justify-center mt-5">
        <input type='text' onChange={handleInputchange} value={text}  className="mr-3 p-2 border border-gray-400 rounded"/>
        <button type='submit' className="p-2 bg-blue-500 text-white rounded">Add Todo</button>
      </form>

      <div className="mt-5">
        {todos.map((item)=>(
            <div key={item.id} className="bg-white shadow rounded p-4 mb-2 flex justify-between items-center">
                <h2 className="text-lg">{item.title}</h2>
                {item.completed ? <h4 className="text-green-500">Completed</h4> : <h4 className="text-red-500">Pending</h4>}

                <button onClick={() => handleDeleteTodo(item.id)} className="text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                </button>
                {item.completed ? 
                <button onClick={()=> handleChangeTOdo(item.id)} className="p-1 bg-yellow-500 text-white rounded">Mark as Pending</button>
                :
                <button onClick={()=> handleChangeTOdo(item.id)} className="p-1 bg-green-500 text-white rounded">Mark as Completed</button>}

            </div>

        ))}
      </div>
    </div>
  )
}

export default Todolist
