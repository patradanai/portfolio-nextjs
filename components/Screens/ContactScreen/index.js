import React from "react";
import ContactForm from "./ContactForm";

const ContactSceen = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <ul>
            <li>Phone:</li>
            <li>E-mail:</li>
            <li>FB</li>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
          <p>Just Leave mesaage to me... here_</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSceen;
