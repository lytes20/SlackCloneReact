import React from "react";
import "./App.css";
import { Contacts } from "./data";
import MessagesDisplay from "./components/MessagesDisplay";
import ContactsDisplay from "./components/ContactsDisplay";

function App() {
  return (
    <div>
      <ContactsDisplay />
      <div className="content">
        <MessagesDisplay contact={Contacts[0]} />
      </div>
    </div>
  );
}

export default App;
