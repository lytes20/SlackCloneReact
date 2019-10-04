import React from 'react';
import './App.css'

import MessagesDisplay from './components/MessagesDisplay'
import ContactsDisplay from './components/ContactsDisplay'

function App() {
  return (
    <div>
      <ContactsDisplay />
      <div className="content">
        <MessagesDisplay />
      </div>

    </div>
  );
}

export default App;
