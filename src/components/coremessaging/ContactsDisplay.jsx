import React from "react";
import "../../assets/styles/contactsdisplay.css";
import { Contacts } from "../../data";

const ContactsDisplay = () => {
  return (
    <div className="contacts-container">
      <h1>Company Name</h1>
      <div className="search-container">
        <form>
          <input className="app-search" type="text" placeholder="jump to" />
        </form>
      </div>

      {/* Channels list */}
      <div className="channels-container">
        <h1>Channels</h1>
        <ul>
          {Contacts.map(contact => (
            <li key={contact.id}># {contact.name}</li>
          ))}
        </ul>
      </div>

      {/* Contacts list */}
      <div className="direct-messages-container">
        <h1>Direct messages</h1>
        <ul>
          {Contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactsDisplay;
