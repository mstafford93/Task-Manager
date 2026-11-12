import React, { useState } from 'react'
import './Input.css'

const Input = () => {
    const [task, setTask] = useState('');
    const [completeBy, setCompleteBy] = useState('');
    const taskArray = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        taskArray.push({task, completeBy});
        setTask('');
        setCompleteBy('');
        console.log(taskArray);
        
    };

    return (
        <div className='input'>
            <label htmlFor="task">Task:</label>
            <input 
                type="text" 
                placeholder="Enter task..." 
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <label htmlFor="completeBy">Complete By:</label>
            <input 
                type="date" 
                value={completeBy}
                onChange={(e) => setCompleteBy(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Input
