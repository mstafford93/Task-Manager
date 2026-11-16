import React, { useState, useEffect } from 'react';
import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Input from './components/Input/Input.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {

  const [task, setTask] = useState('');
  const [completeBy, setCompleteBy] = useState('');
  const [taskArray, setTaskArray] = useState(JSON.parse(localStorage.getItem('taskArray')) || []);
  const [classNameToggle, setClassNameToggle] = useState('');
  const [taskId, setTaskId] = useState(+localStorage.getItem('taskId') || 0); // Gets previous or 0

  useEffect(() => {
    localStorage.setItem('taskId', JSON.stringify(taskId));
  },[taskId]); //seperate taskId for when filetering days still able to delete

  useEffect(() => {
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
  }, [taskArray]); //sets localstorage every time array is updated


  function handleClick(e) {
        const className = e.target.className;
        const card = document.querySelector(`.card`);
        card.classList.remove("missed-deadline", "less-than-3-days", "more-than-3-days", "completed");
        setClassNameToggle(className);
        card.classList.toggle(className);
        //console.log('Class Name:', classNameToggle); //Works but updates after click showing previous button click
    }

    

  return (
    <>
      <Header />
      <Input taskId={taskId} setTaskId={setTaskId} task={task} setTask={setTask} completeBy={completeBy} setCompleteBy={setCompleteBy} taskArray={taskArray} setTaskArray={setTaskArray} />
      <Navigation handleClick={handleClick} />
      <div className='card-container'>
        <Card taskArray={taskArray} setTaskArray={setTaskArray} classNameToggle={classNameToggle} />
      </div>
      <Footer />
    </>
  )
}

export default App;

