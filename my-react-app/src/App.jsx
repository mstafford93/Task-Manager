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

  useEffect(() => {
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
  }, [taskArray]);

  function handleClick(e) {
        const className = e.target.className;
        console.log(`Button clicked: ${className}`);
    }

  return (
    <>
      <Header />
      <Input task={task} setTask={setTask} completeBy={completeBy} setCompleteBy={setCompleteBy} taskArray={taskArray} setTaskArray={setTaskArray} />
      <Navigation handleClick={handleClick} />
      <div className='card-container'>
        <Card title="Missed Deadline" className="missed-deadline" taskArray={taskArray} />
        <Card title="Less than 3 days" className="less-than-3-days" taskArray={taskArray} />
        <Card title="More than 3 days" className="more-than-3-days" taskArray={taskArray} />
      </div>
      <Footer />
    </>
  )
}

export default App;
