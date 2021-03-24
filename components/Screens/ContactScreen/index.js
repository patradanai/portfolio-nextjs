import React from "react";
import ContactForm from "./ContactForm";
import GithubIcon from "../../icons/gitub";
import LinkedInIcon from "../../icons/linkedin";
import FacebookIcon from "../../icons/facebook";

const ContactSceen = () => {
  return (
    <div className="container">
      <p className="text-4xl my-5">Get in Touch....</p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-5">
          <ul className="space-y-3">
            <li>Phone: +668-3949-1651</li>
            <li>E-mail: patradanai_n@hotmail.com</li>
            <li>
              <GithubIcon className="w-10 h-10" />
            </li>
            <li>
              <LinkedInIcon className="w-10 h-10" />
            </li>
            <li>
              <FacebookIcon className="w-10 h-10" />
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <p className="my-5">Just Leave mesaage to me... here_</p>
          <div className="w-full md:w-3/4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSceen;
