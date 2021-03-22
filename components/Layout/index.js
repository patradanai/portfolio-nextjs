import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

Layout.prototype = {
  children: PropTypes.node.isRequired,
};

export default Layout;
