// import logo from "./logo.svg";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DATA } from "../../constants/en";

const Footer = () => {
  return (
    <>
      <hr />
      <Navbar bg="light" variant="success" sticky="bottom">
        <Nav className="mr-auto">
          <Link to="/contact" className="nav-link">
            {DATA.footerContactUs}
          </Link>
          <Link to="/about" className="nav-link">
            {DATA.footerAboutUs}
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Footer;
