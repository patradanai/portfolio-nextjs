import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ListIcon from "../icons/list";

const NavBar = () => {
  const [stateOpen, setStateOpen] = useState(false);
  return (
    <div
      className={`${
        stateOpen ? "h-48" : ""
      } bg-white w-full shadow h-12 transition-all duration-500 ease-in-out`}
    >
      <div className="container flex flex-col md:flex-row">
        <div className="p-2 w-full flex flex-row items-center justify-between">
          <Link href="/" as="/">
            <div className="cursor-pointer">
              <p className="text-2xl uppercase">Portfolio</p>
            </div>
          </Link>
          <div
            className="border flex md:hidden items-center justify-center rounded-md ml-auto cursor-pointer"
            onClick={() => setStateOpen(!stateOpen)}
          >
            <ListIcon className="w-7 h-7" />
          </div>
        </div>

        <nav
          className={`${
            stateOpen ? "flex" : "hidden md:flex"
          } w-full flex-grow pb-4 pl-2 justify-center space-y-2 md:space-y-0 md:pb-0 flex-col md:flex-row md:justify-end md:items-center md:space-x-5`}
        >
          <Link href="/" as="/">
            <a>Home</a>
          </Link>
          <Link href="/about" as="/about">
            <a>About</a>
          </Link>
          <Link href="/portfolio" as="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/contact" as="/contact">
            <a>Contact</a>
          </Link>
        </nav>
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
    </div>
  );
};

NavBar.prototype = {};

export default NavBar;
