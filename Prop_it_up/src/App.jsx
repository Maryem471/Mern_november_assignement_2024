import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="app">
      <h1>Person Cards</h1>
      <PersonCard firstName="John" lastName="Doe" age={28} hairColor="Black" />
      <PersonCard firstName="Jane" lastName="Smith" age={34} hairColor="Brown" />
      <PersonCard firstName="Sam" lastName="Wilson" age={40} hairColor="Blonde" />
      <PersonCard firstName="Anna" lastName="Taylor" age={25} hairColor="Red" />
    </div>
  );
}

export default App;
