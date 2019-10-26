import React from "react";
import { Contacts } from "../../data";
import MessagesDisplay from "./MessagesDisplay";
import ContactsDisplay from "./ContactsDisplay";

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
