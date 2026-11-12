import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Input from './components/Input/Input.jsx';

function App() {
  const people = [
    { id: 1, name: 'Matthew Stafford', email: 'matthew@example.com', isStudent: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isStudent: true },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', isStudent: false }
  ];
  return (
    <>
    <Header />
    <Input />
    {people.map((person) => (
      <Card key={person.id} people={person} />
    ))}
    <Footer />
    </>
  )
}

export default App;
