import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  const people = [
    { id: 1, name: 'Matthew Stafford', email: 'matthew@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ];
  return (
    <>
    <Header />
    {people.map((person) => (
      <Card key={person.id} people={person} />
    ))}
    <Footer />
    </>
  )
}

export default App;
