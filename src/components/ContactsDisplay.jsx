import React from "react";
import "../assets/styles/contactsdisplay.css"
import { Contacts } from "../data";

const ContactsDisplay = () => {
  return (
    <div className="contacts-container">
      <ul>
        {Contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsDisplay;
