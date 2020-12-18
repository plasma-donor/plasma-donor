import brandImg from "../../img/plasma-min.png";
import React, { useContext } from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { DATA } from "../../constants/en";
import "./TopNav.css";
import { loginContext } from "../../loginContext";

const TopNav = () => {
  let history = useHistory();
  const { loggedIn, setLoggedIn } = useContext(loginContext);

  const renderMenuItems = () => {
    if (loggedIn) {
      return (
        <>
          <Nav className="mr-auto">
            <NavDropdown title="Patient" id="collasible-nav-dropdown">
              <Link to="/patients" className="nav-link">
                {DATA.navPatients}
              </Link>
              <Link to="/patient" className="nav-link">
                {DATA.navAddPatient}
              </Link>
            </NavDropdown>
            <NavDropdown title="Donor" id="collasible-nav-dropdown">
              <Link to="/donors" className="nav-link">
                {DATA.navDonors}
              </Link>
              <Link to="/donor" className="nav-link">
                {DATA.navDonor}
              </Link>
            </NavDropdown>
            <NavDropdown title="Request" id="collasible-nav-dropdown">
              <Link to="/patients" className="nav-link">
                {DATA.navDonationRaise}
              </Link>
              <Link to="/closerequest" className="nav-link">
                {DATA.navDonation}
              </Link>
            </NavDropdown>
            <NavDropdown title="Upload" id="collasible-nav-dropdown">
              <Link to="/upload" className="nav-link">
                {DATA.navUpload}
              </Link>
              <Link to="/upload" className="nav-link">
                {DATA.navUploadPatients}
              </Link>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                setLoggedIn(false);
                history.push("/login");
              }}
            >
              Logout
            </Button>
          </Navbar.Text>
        </>
      );
    }
    return null;
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <img
          width="30"
          height="30"
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {renderMenuItems()}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
