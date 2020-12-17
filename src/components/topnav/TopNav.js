import brandImg from "../../img/plasma-min.png";
import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { DATA } from "../../constants/en";
import "./TopNav.css";

const TopNav = () => {
  let history = useHistory();

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
              history.push("/login");
            }}
          >
            Logout
          </Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#link">Link</Nav.Link>
    //       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default TopNav;
