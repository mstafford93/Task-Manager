import React, { useEffect } from 'react'
import './Card.css'

const Card = ({ title, taskArray }) => {

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

let className = document.querySelector(`.card`) ? document.querySelector(`.card`).classList.value : ''; // Get the class name of the card element
  //console.log(className);
  //console.log('Missed Tasks:', missedTasks);
  //console.log('Less than 3 Days Tasks:', lessThan3DaysTasks);
  //console.log('More than 3 Days Tasks:', moreThan3DaysTasks);


  return (
    <div className={`card`}>
        <h2 className='card-title'>{title}</h2>
        <ul className='card-list'>
            {className === 'card missed-deadline' && missedTasks.map((taskItem, index) => (
                <li key={index}><span>{taskItem.task}</span> <span>{GbDate(taskItem.completeBy)}</span></li>
            ))}
            {className === 'card less-than-3-days' && lessThan3DaysTasks.map((taskItem, index) => (
                <li key={index}><span>{taskItem.task}</span> <span>{GbDate(taskItem.completeBy)}</span></li>
            ))}
            {className === 'card more-than-3-days' && moreThan3DaysTasks.map((taskItem, index) => (
                <li key={index}><span>{taskItem.task}</span> <span>{GbDate(taskItem.completeBy)}</span></li>
            ))}
        </ul>
    </div>
  )
}

export default Card
