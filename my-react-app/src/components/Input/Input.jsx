import React, { useState } from 'react'
import './Input.css'

const Input = () => {
    const [task, setTask] = useState('');
    const [completeBy, setCompleteBy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Task:', task);
        console.log('Complete By:', completeBy);
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
                placeholder="Enter complete by..." 
                value={completeBy}
                onChange={(e) => setCompleteBy(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Input
