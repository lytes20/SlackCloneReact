import React from "react";
import "../assets/styles/contactsdisplay.css"
import { Contacts } from "../data";

const ContactsDisplay = () => {
  return (
    <div className="contacts-container">
      <h1>Company Name</h1>
      <form>
        <input type="text" placeholder="jump to"/>
      </form>
      {/* Channels list */}
      <h1>Channels</h1>
      <ul>
        {Contacts.map(contact => (
          <li key={contact.id}># {contact.name}</li>
        ))}
      </ul>

      {/* Contacts list */}
      <h1>Direct messages</h1>
      <ul>
        {Contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsDisplay;
