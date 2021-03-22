import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white flex items-center w-full h-16 px-3">
      <div className="container mx-auto flex">
        <div>
          <p className="text-2xl uppercase">Portfolio</p>
        </div>
        <div className="ml-auto space-x-10">
          <Link href="/about" as="/about">
            <a>About</a>
          </Link>
          <Link href="/portfolio" as="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/contact" as="/contact">
            <a>Contact</a>
          </Link>
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
          bottom: 0;
          content: "";
          display: block;
          height: 2px;
          left: 50%;
          background: #000;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
          width: 0;
        }
        a:hover::after {
          width: 100%;
          left: 0;
        }
      `}</style>
    </nav>
  );
};

NavBar.prototype = {};

export default NavBar;
