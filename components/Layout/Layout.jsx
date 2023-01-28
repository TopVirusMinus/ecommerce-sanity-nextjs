import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={Styles.layout}>
      <Head>
        <title>Marzouk Shop</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={Styles.main_container}>{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;
