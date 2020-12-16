import brandImg from "../../img/plasma-min.png";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { DATA } from "../../constants/en";
import "./TopNav.css";

const TopNav = () => {
  let history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          width="24"
          height="24"
          src={brandImg}
          alt={DATA.navBrand}
          title={DATA.navBrand}
          onClick={() => {
            history.push("/login");
          }}
          style={{ cursor: "pointer", marginRight: ".7rem" }}
        />
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/login");
          }}
        >
          Saving Lives
        </span>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/patients" className="nav-link">
          {DATA.navPatients}
        </Link>
        <Link to="/patient" className="nav-link">
          {DATA.navAddPatient}
        </Link>
        <Link to="/upload" className="nav-link">
          {DATA.navUpload}
        </Link>
        <Link to="/closerequest" className="nav-link">
          {DATA.navDonation}
        </Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              history.push("/login");
            }}
          >
            Logout
          </Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
