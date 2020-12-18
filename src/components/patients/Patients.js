// import logo from "./logo.svg";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Spinner, Table } from "react-bootstrap";
import { DATA } from "../../constants/en";
import { API } from "../../constants/api";
import { useHistory } from "react-router-dom";
import { loginContext } from "../../loginContext";

const patientsList = [];

const Patients = () => {
  const [patients, setPatients] = useState(patientsList);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  let history = useHistory();
  const { loggedIn } = useContext(loginContext);

  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [loggedIn, history]);

  useEffect(() => {
    setLoading(true);
    Axios.post(`${API.listPatients}`, { page: 1, size: 10 })
      .then((res) => {
        if (res && res.data && res.data.statusCode === 200) {
          setLoading(false);
          if (typeof res.data.data === "string") {
            setMessage(res.data.data);
          } else {
            setPatients(res.data.data);
          }
        }
      })
      .catch((e) => {
        setLoading(false);
        setMessage(DATA.msgError);
      });
  }, []);

  const renderSpinner = () => {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  };

  const showMessage = () => {
    return loading ? (
      renderSpinner()
    ) : message ? (
      <Alert variant={"primary"}>{message}</Alert>
    ) : null;
  };

  const sendPlasmaRequest = (patientId) => {
    setLoading(true);
    Axios.post(`${API.requestPlasma}/${patientId}`)
      .then((res) => {
        if (res && res.data && res.data.statusCode === 200) {
          setLoading(false);
          if (typeof res.data.data === "string") {
            setMessage("Plasma request raised successfully");
          }
        }
      })
      .catch((e) => {
        setLoading(false);
        setMessage(DATA.msgError);
      });
  };

  const renderPatients = () => {
    if (patients) {
      return patients.map((patient, index) => {
        return (
          <tr key={patient.id}>
            <td>{index + 1}</td>
            <td>{patient.name}</td>
            <td>{patient.email}</td>
            <td>{patient.bloodGroup}</td>
            <td>{patient.mobile}</td>
            <td style={{ textAlign: "center" }}>
              <span
                className="link"
                onClick={() => history.push(`patient/${patient.id}`)}
              >
                Edit
              </span>
              |
              <span
                className="link"
                onClick={() => sendPlasmaRequest(patient.id)}
              >
                Raise Plasma Request
              </span>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <h4 className="text-center mar-top-bot-2rem">{DATA.msgPatients}</h4>
      <hr />
      {showMessage()}
      <br />
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Blood Group</th>
            <th>Mobile No</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>{renderPatients()}</tbody>
      </Table>
    </>
  );
};

export default Patients;
