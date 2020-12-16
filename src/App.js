// import logo from "./logo.svg";
import React, { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import "./App.css";
import TopNav from "./components/topnav/TopNav";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Share from "./components/share/Share";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const Upload = lazy(() => import("./components/upload/Upload"));
const Patient = lazy(() => import("./components/patient/Patient"));
const Patients = lazy(() => import("./components/patients/Patients"));
const Donors = lazy(() => import("./components/donors/Donors"));
const Donation = lazy(() => import("./components/donation/Donation"));
const Donor = lazy(() => import("./components/donor/Donor"));

const renderSpinner = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" role="status">
        {" "}
      </Spinner>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Container>
        <div className="App">
          <Suspense fallback={renderSpinner()}>
            <Router>
              <TopNav></TopNav>
              <Switch>
                <Route path="/patients">
                  <Patients></Patients>
                </Route>
                <Route path="/patient/:id">
                  <Patient></Patient>
                </Route>
                <Route path="/patient">
                  <Patient></Patient>
                </Route>
                <Route path="/upload">
                  <Upload></Upload>
                </Route>
                <Route path="/closerequest">
                  <Donation></Donation>
                </Route>
                <Route path="/fbshare">
                  <Share></Share>
                </Route>
                <Route path="/about">
                  <About></About>
                </Route>
                <Route path="/contact">
                  <Contact></Contact>
                </Route>
                <Route path="/donors">
                  <Donors></Donors>
                </Route>
                <Route path="/donor/:id">
                  <Donor></Donor>
                </Route>
                <Route path="/donor">
                  <Donor></Donor>
                </Route>
                <Route path="/">
                  <Login></Login>
                </Route>
              </Switch>
              <Footer></Footer>
            </Router>
          </Suspense>
        </div>
      </Container>
    </>
  );
};

export default App;
