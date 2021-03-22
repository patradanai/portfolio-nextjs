import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="h-full my-auto">{children}</div>
      <Footer />
    </div>
  );
};

Layout.prototype = {
  children: PropTypes.node.isRequired,
};

export default Layout;
