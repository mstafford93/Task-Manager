import React from 'react'
import './Card.css'

const Card = ({ title, taskArray, className }) => {

  const today = new Date();
  console.log(today.getDate());
  console.log(today.getDate()+ 3); //Increments Days
  
  const missedTasks = taskArray.filter(taskItem => new Date(taskItem.completeBy) < today);
  const lessThan3DaysTasks = taskArray.filter(taskItem => new Date(taskItem.completeBy) < new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3) && new Date(taskItem.completeBy) >= today);
  const moreThan3DaysTasks = taskArray.filter(taskItem => new Date(taskItem.completeBy) >= new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)); //neccessary to get full date instead of one day

  console.log('Missed Tasks:', missedTasks);
  console.log('Less than 3 Days Tasks:', lessThan3DaysTasks);
  console.log('More than 3 Days Tasks:', moreThan3DaysTasks);

  return (
    <div className={`card ${className}`}>
        <h2 className='card-title'>{title}</h2>
        <ul className='card-list'>
            {className === 'missed-deadline' && missedTasks.map((taskItem, index) => (
                <li key={index}><span>{taskItem.task}</span> <span>{taskItem.completeBy}</span></li>
            ))}
            {className === 'less-than-3-days' && lessThan3DaysTasks.map((taskItem, index) => (
                <li key={index}><span>{taskItem.task}</span> <span>{taskItem.completeBy}</span></li>
            ))}
            {className === 'more-than-3-days' && moreThan3DaysTasks.map((taskItem, index) => (
                <li key={index}><span>{taskItem.task}</span> <span>{taskItem.completeBy}</span></li>
            ))}
        </ul>
    </div>
  )
}

export default Card
