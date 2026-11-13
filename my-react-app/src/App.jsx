import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Input from './components/Input/Input.jsx';

function App() {
  
  return (
    <>
    <Header />
    <Input />
    <div className='card-container'>
      <Card title="Missed Deadline"/>
      <Card title="Less than a day"/>
      <Card title="More than a day"/>
    </div>
    <Footer />
    </>
  )
}

export default App;
