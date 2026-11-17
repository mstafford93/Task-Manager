import React, { useState, useEffect } from 'react'
import './Input.css'

const Input = ({ task, setTask, completeBy, setCompleteBy, taskArray, setTaskArray, taskId, setTaskId }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task || !completeBy) {
            alert('Please enter a task and completion date');
            return; //Stops empty task or completeBy from being added to the array
        }
        if (completeBy < new Date().toISOString().split('T')[0]) {
            alert('Date must be after today'); //stops user from entering a date that is before today
            return;
        }
        setTaskArray([...taskArray, {task, completeBy, isCompleted: false, isDeleted: false, taskId}]); //create and set isCompleted to false
        setTask(''); //resets tasks after submit
        setCompleteBy(''); //resets completeBy after submit
        setTaskId((prev) => prev + 1) //moves taskId by plus one
        //console.log(taskArray);
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
