import React from 'react';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="app">
      <h1>Birthday Application</h1>
      <PersonCard firstName="John" lastName="Doe" age={28} hairColor="Black" />
      <PersonCard firstName="Jane" lastName="Smith" age={34} hairColor="Brown" />
      
    </div>
  );
}

export default App;
