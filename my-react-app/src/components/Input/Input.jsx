import React, { useState } from 'react'
import './Input.css'

const Input = () => {
    const [task, setTask] = useState('');
    const [completeBy, setCompleteBy] = useState('');
    const [taskArray, setTaskArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task || !completeBy) {
            alert('Please enter a task and completion date');
            return; //Stops empty task or completeBy from being added to the array
        }
        setTaskArray([...taskArray, {task, completeBy}]);
        setTask(''); //resets tasks after submit
        setCompleteBy(''); //resets completeBy after submit
        console.log(taskArray);
    };

    return (
        <div className='input'>
            <div>
            <label htmlFor="task">Task:</label>
            <input 
                type="text"
                placeholder="Enter task..." 
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="completeBy">Complete By:</label>
            <input 
                type="date" 
                value={completeBy}
                onChange={(e) => setCompleteBy(e.target.value)}
            />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Input
