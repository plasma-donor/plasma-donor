// import logo from "./logo.svg";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Form, Spinner, Table } from "react-bootstrap";
import { DATA } from "../../constants/en";
import { API } from "../../constants/api";

const patientsList = [];

const Donation = () => {
  const [patients, setPatients] = useState(patientsList);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    Axios.post(`${API.listDonors}`)
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
        setMessage("Donors: " + DATA.msgError);
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

  const closeDonationRequest = (patientId) => {
    const patient = patients.find((patient) => patient.patientId == patientId);

    const selectedDonor = patient.donorsList.find((donor) => {
      return donor.selected == true;
    });

    setLoading(true);
    Axios.post(`${API.closeDonationRequest}`, {
      patientId,
      donorId: selectedDonor.donorId,
      donationDate: patient.donationDate,
    })
      .then((res) => {
        if (res && res.data && res.data.statusCode === 200) {
          setLoading(false);
          if (typeof res.data.data === "string") {
            setMessage(res.data.data);
          } else {
            setMessage("Donation request closed successfully");
          }
        }
      })
      .catch((e) => {
        setLoading(false);
        setMessage(DATA.msgError);
      });
  };

  const onDonorSelect = (patientId, donorId) => {
    const patient = patients.find((patient) => patient.patientId == patientId);
    patient.donorsList.forEach((donor) => {
      if (donor.donorId == donorId) {
        donor.selected = true;
      }
    });
  };

  const onDateChange = (patientId, date) => {
    const patient = patients.find((patient) => patient.patientId == patientId);
    patient.donationDate = date;
  };

  const renderDonors = (donors) => {
    if (donors) {
      return donors.map((donor, index) => {
        donor.selected = false;
        return (
          <option key={donor.donorId} value={donor.donorId}>
            {donor.name}
          </option>
        );
      });
    }
  };

  const renderPatients = () => {
    if (patients) {
      return patients.map((patient, index) => {
        return (
          <tr key={patient.patientId}>
            <td>{index + 1}</td>
            <td>{patient.patientName}</td>
            <td>{patient.patientEmail}</td>
            <td>
              <Form.Control
                type="date"
                placeholder="Enter Admission Date"
                size="sm"
                value={patient.donationDate}
                onChange={(e) =>
                  onDateChange(patient.patientId, e.target.value)
                }
              />
            </td>
            <td>
              <Form.Control
                as="select"
                onChange={(e) =>
                  onDonorSelect(patient.patientId, e.target.value)
                }
              >
                <option value="">Select Donor</option>
                {renderDonors(patient.donorsList)}
              </Form.Control>
            </td>
            <td style={{ textAlign: "center" }}>
              <span
                className="link"
                onClick={() => closeDonationRequest(patient.patientId)}
              >
                Close Donation Request
              </span>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <h4 className="text-center mar-top-bot-2rem">{DATA.msgDonations}</h4>
      <hr />
      {showMessage()}
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Donation Date</th>
            <th>Donars List</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>{renderPatients()}</tbody>
      </Table>
    </>
  );
};

export default Donation;
