import React from 'react';
import Tabs from './components/Tabs'; 

const tabItems = [
  { label: 'Tab 1', content: 'This is content for Tab 1' },
  { label: 'Tab 2', content: 'This is content for Tab 2' },
  { label: 'Tab 3', content: 'This is content for Tab 3' },
];

function App() {
  return (
    <div>
   
      <Tabs items={tabItems} />
    </div>
  );
}

export default App;
