import React from "react";
import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Head>
        <link
          rel="preload"
          href="/fonts/Lobster-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/TrainOne-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <div className="h-full flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

Layout.prototype = {
  children: PropTypes.node.isRequired,
};

export default Layout;
