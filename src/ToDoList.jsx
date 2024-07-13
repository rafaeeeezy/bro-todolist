import React, { useState } from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...tasks, newTask])
            setNewTask("")
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='text-center mt-[100px]'>

            <p className='text-4xl font-bold mb-10'>To-Do-List</p>

            <input 
                onChange={handleInputChange} 
                type='text' 
                value={newTask} 
                placeholder='Enter a task...' 
                className='text-[1.6rem] p-[10px] border-[2px] rounded-md'
            />

            <button onClick={addTask} className='text-[1.7rem] font-bold py-[10px] px-[20px] text-white bg-green-300 hover:bg-green-400 rounded-md cursor-pointer transition'>Add</button>

            <ol className='mt-10 list-inside list-decimal'>
                {tasks.map((task, index) => 
                    <li className='text-[2rem] font-bold p-[15px] mb-[10px] border-[3px] rounded-md flex items-center justify-between' key={index}>
                        <span>{task}</span>
                        <div>
                            <button onClick={() => deleteTask(index)} className='text-[1.4rem] font-bold py-[8px] px-[12px] text-white bg-red-400 hover:bg-red-500 rounded-md cursor-pointer transition ml-[10px]'>Delete</button>
                            <button onClick={() => moveTaskUp(index)} className='text-[1.4rem] font-bold py-[8px] px-[12px] text-white bg-gray-300 hover:bg-gray-400 rounded-md cursor-pointer transition ml-[10px]'>Move Up</button>
                            <button onClick={() => moveTaskDown(index)} className='text-[1.4rem] font-bold py-[8px] px-[12px] text-white bg-gray-300 hover:bg-gray-400 rounded-md cursor-pointer transition ml-[10px]'>Move Down</button>
                        </div>
                        
                    </li>
                )}
                
            </ol>
        </div>  
    )
}

export default ToDoList