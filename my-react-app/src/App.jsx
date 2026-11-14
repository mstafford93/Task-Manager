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

  useEffect(() => {
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
  }, [taskArray]);


  function handleClick(e) {
        const className = e.target.className;
        const card = document.querySelector(`.card`);
        card.classList.remove("missed-deadline", "less-than-3-days", "more-than-3-days");
        setClassNameToggle(className);
        card.classList.toggle(className);
        console.log('Class Name:', classNameToggle);
    }
    

  return (
    <>
      <Header />
      <Input task={task} setTask={setTask} completeBy={completeBy} setCompleteBy={setCompleteBy} taskArray={taskArray} setTaskArray={setTaskArray} />
      <Navigation handleClick={handleClick} />
      <div className='card-container'>
        <Card title="Test" taskArray={taskArray} classNameToggle={classNameToggle}/>
      </div>
      <Footer />
    </>
  )
}

export default App;
