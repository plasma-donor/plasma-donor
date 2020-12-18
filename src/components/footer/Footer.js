// import logo from "./logo.svg";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DATA } from "../../constants/en";

const Footer = () => {
  return (
    <>
      <hr />
      <Navbar bg="dark" variant="dark" sticky="bottom">
        <Nav className="mr-auto">
          <Navbar.Text>&copy;</Navbar.Text>
          <Link to="/about" className="nav-link">
            {DATA.footerAboutUs}
          </Link>
          <Link to="/faq" className="nav-link">
            {DATA.footerFAQ}
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Footer;
