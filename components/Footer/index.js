import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div>
            <ul>
              <li className="mb-3">
                <a>Home</a>
              </li>
              <li className="mb-3">
                <a>About</a>
              </li>
              <li className="mb-3">
                <a>Portfolio</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-3">
                <a>LinkedIn</a>
              </li>
              <li>
                <a>Github</a>
              </li>
            </ul>
          </div>
          <div>3</div>
        </div>
      </div>
      <div className="bg-white h-12 flex items-center mt-10">
        <div className="container mx-auto">
          <p className="text-center">
            © 2021 PATRADANAI NAKPIMAY. All Rights Reserved
          </p>
        </div>
      </div>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:hover {
          cursor: pointer;
        }
        a::after {
          display: block;
          content: "";
          height: 2px;
          width: 0;
          background: #000;
          transition: 300ms;
        }
        a:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

Footer.prototype = {};

export default Footer;
