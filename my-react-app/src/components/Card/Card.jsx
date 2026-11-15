import React, { useEffect, useState } from 'react'
import './Card.css'



const Card = ({ taskArray, classNameToggle }) => {

    const [title, setTitle] = useState('');

    useEffect(()=>{
        if (classNameToggle === 'missed-deadline') {
        setTitle('Missed Deadline');
    } else if (classNameToggle === 'less-than-3-days') {
        setTitle('Less than 3 Days');
    } else if (classNameToggle === 'more-than-3-days') {
        setTitle('More than 3 Days');
    } else {
        setTitle('');
    }
    }, [classNameToggle]) //Prevents too many rerenders
    
    const today = new Date();
    //console.log(today.getDate());
    //console.log(today.getDate()+ 3); //Increments Days

    const missedTasks = taskArray.filter(taskItem => new Date(taskItem.completeBy) < today);
    const lessThan3DaysTasks = taskArray.filter(taskItem => new Date(taskItem.completeBy) < new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3) && new Date(taskItem.completeBy) >= today);
    const moreThan3DaysTasks = taskArray.filter(taskItem => new Date(taskItem.completeBy) >= new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)); //neccessary to get full date instead of one day

    function GbDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB");
    }

 

  //console.log(className);
  //console.log('Missed Tasks:', missedTasks);
  //console.log('Less than 3 Days Tasks:', lessThan3DaysTasks);
  //console.log('More than 3 Days Tasks:', moreThan3DaysTasks);


  return (
        <div className={`card`}>
            <h2 className='card-title'>{title}</h2>
            <ul className='card-list'>
                {classNameToggle === 'missed-deadline' && missedTasks.map((taskItem, index) => (
                    <li key={index}><span><strong>Task: </strong>{taskItem.task}</span> <span><strong>Complete By: </strong>{GbDate(taskItem.completeBy)}<i class="fa fa-check"></i></span></li>
                ))}
                {classNameToggle === 'less-than-3-days' && lessThan3DaysTasks.map((taskItem, index) => (
                    <li key={index}><span>{taskItem.task}</span> <span>{GbDate(taskItem.completeBy)}</span></li>
                ))}
                {classNameToggle === 'more-than-3-days' && moreThan3DaysTasks.map((taskItem, index) => (
                    <li key={index}><span>{taskItem.task}</span> <span>{GbDate(taskItem.completeBy)}</span></li>
                ))}
            </ul>
        </div>
    )
}

export default Card
