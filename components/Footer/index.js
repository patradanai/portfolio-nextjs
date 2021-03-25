import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import FacebookIcon from "../icons/facebook";
import GithubIcon from "../icons/gitub";
import LinkedInIcon from "../icons/linkedin";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div>
            <p className="uppercase text-xl font-mono">Patradanai Nakpimay</p>
            <p className="uppercase text-sm text-gray-400">
              full stack web developer
            </p>
            <ul className="space-y-3 mt-2">
              <li>Phone: +668-3949-1651</li>
              <li>E-mail: patradanai_n@hotmail.com</li>
            </ul>
            <div className="flex my-3 space-x-5">
              <a href="https://www.facebook.com/patradanai">
                <FacebookIcon className="w-8 h-8" />
              </a>
              <a href="https://github.com/patradanai">
                <GithubIcon className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/patradanai-nakpimay/">
                <LinkedInIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="my-2">
            <ul>
              <li className="mb-3">
                <Link href="/" as="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/about" as="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/portfolio" as="/portfolio">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" as="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-2">
            <ul>
              <li className="mb-3">
                <a href="https://www.linkedin.com/in/patradanai-nakpimay/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/patradanai">Github</a>
              </li>
            </ul>
          </div>
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
