// import logo from "./logo.svg";
import React, { useEffect, useReducer, useState } from "react";
import { DATA } from "../../constants/en";
import {
  Button,
  Form,
  Row,
  Col,
  Alert,
  Spinner,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Axios from "axios";
import { API } from "../../constants/api";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  age: "",
  gender: "",
  mobile: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  weight: "",
  bloodGroup: "A",
  hbLevel: "",
  admissionDate: "",
  dischargeDate: "",
  willingToDonate: "Y",
  hasCovidRecovered: "N",
  hasCancerPatient: "N",
  hasHIV: "N",
  hasHepatitis: "N",
  hasBP: "N",
  hasHTLV1: "N",
  hasHeartAilment: "N",
  hasKidneyAilment: "N",
  hasPrgenantInPast: "N",
  hasTB: "N",
  hasTatto: "N",
  hasSurgery: "N",
};

const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "age":
      return { ...state, age: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "mobile":
      return { ...state, mobile: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "address":
      return { ...state, address: action.payload };
    case "state":
      return { ...state, state: action.payload };
    case "city":
      return { ...state, city: action.payload };
    case "zip":
      return { ...state, zip: action.payload };
    case "weight":
      return { ...state, weight: action.payload };
    case "bloodGroup":
      return { ...state, bloodGroup: action.payload };
    case "hbLevel":
      return { ...state, hbLevel: action.payload };
    case "admissionDate":
      return { ...state, admissionDate: action.payload };
    case "dischargeDate":
      return { ...state, dischargeDate: action.payload };
    case "willingToDonate":
      return { ...state, willingToDonate: action.payload };
    case "hasCovidRecovered":
      return { ...state, hasCovidRecovered: action.payload };
    case "hasCancerPatient":
      return { ...state, hasCancerPatient: action.payload };
    case "hasHIV":
      return { ...state, hasHIV: action.payload };
    case "hasHepatitis":
      return { ...state, hasHepatitis: action.payload };
    case "hasBP":
      return { ...state, hasBP: action.payload };
    case "hasHTLV1":
      return { ...state, hasHTLV1: action.payload };
    case "hasHeartAilment":
      return { ...state, hasHeartAilment: action.payload };
    case "hasKidneyAilment":
      return { ...state, hasKidneyAilment: action.payload };
    case "hasPrgenantInPast":
      return { ...state, hasPrgenantInPast: action.payload };
    case "hasTB":
      return { ...state, hasTB: action.payload };
    case "hasTatto":
      return { ...state, hasTatto: action.payload };
    case "hasSurgery":
      return { ...state, hasSurgery: action.payload };
    case "submit":
      return initialState;
    case "reset":
      return initialState;
    case "get":
      return { ...action.payload };
    case "update":
      return state;
    default:
      throw new Error();
  }
};

const Patient = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      Axios.post(`${API.editPatient}/${id}`)
        .then((res) => {
          if (res && res.data && res.data.statusCode === 200) {
            setLoading(false);
            if (typeof res.data.data === "string") {
              setMessage(res.data.data);
            } else {
              // setMessage("Patient form loaded successfully for updating.");
              dispatch({ type: "get", payload: res.data.data });
            }
          }
        })
        .catch((e) => {
          setLoading(false);
          setMessage(DATA.msgError);
        });
    } else {
      dispatch({ type: "reset" });
    }
  }, [id]);

  const renderSpinner = () => {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  };

  const onSubmit = () => {
    setLoading(true);
    if (id) {
      Axios.post(`${API.updatePatient}/${id}`, state)
        .then((res) => {
          if (res && res.data && res.data.statusCode === 200) {
            setLoading(false);
            setMessage("Patient successfully updated");
            dispatch({ type: "update" });
          }
        })
        .catch((e) => {
          setLoading(false);
          setMessage(DATA.msgError);
        });
    } else {
      Axios.post(API.addPatient, state)
        .then((res) => {
          if (res && res.data && res.data.statusCode === 200) {
            setLoading(false);
            setMessage("Patient successfully added");
            dispatch({ type: "submit" });
          }
        })
        .catch((e) => {
          setLoading(false);
          setMessage(DATA.msgError);
        });
    }
  };

  const onReset = () => {
    setMessage("");
    dispatch({ type: "reset" });
  };

  const showMessage = () => {
    return loading ? (
      renderSpinner()
    ) : message ? (
      <Alert variant={"primary"}>{message}</Alert>
    ) : null;
  };

  return (
    <>
      <h4 className="text-center mar-top-bot-2rem">{DATA.msgAddPatient}</h4>
      <hr />
      {showMessage()}
      <br />
      <Form
        onSubmit={(e) => {
          onSubmit();
          e.preventDefault();
        }}
        onReset={onReset}
      >
        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Full Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              size="sm"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Age
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="number"
              placeholder="Enter Age"
              size="sm"
              value={state.age}
              onChange={(e) =>
                dispatch({ type: "age", payload: e.target.value })
              }
              required
            />
          </Col>
          <Form.Label as={Col} sm="2">
            Gender{" "}
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.gender}
              onChange={(e) =>
                dispatch({ type: "gender", payload: e.target.value })
              }
              required
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Mobile
          </Form.Label>
          <Col sm="4">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                placeholder="Enter Mobile No"
                // size="sm"
                value={state.mobile}
                onChange={(e) =>
                  dispatch({ type: "mobile", payload: e.target.value })
                }
                required
              />
            </InputGroup>
          </Col>
          <Form.Label as={Col} sm="2">
            Email Id
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="email"
              placeholder="Enter Email Id"
              // size="sm"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Address
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              size="sm"
              value={state.address}
              onChange={(e) =>
                dispatch({ type: "address", payload: e.target.value })
              }
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            State
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              placeholder="Enter State"
              size="sm"
              value={state.state}
              onChange={(e) =>
                dispatch({ type: "state", payload: e.target.value })
              }
              required
            />
          </Col>
          <Form.Label as={Col} sm="2">
            City
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              placeholder="Enter City"
              size="sm"
              value={state.city}
              onChange={(e) =>
                dispatch({ type: "city", payload: e.target.value })
              }
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Zip
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="number"
              placeholder="Enter Zip"
              size="sm"
              value={state.zip}
              onChange={(e) =>
                dispatch({ type: "zip", payload: e.target.value })
              }
              required
            />
          </Col>
          <Form.Label as={Col} sm="2">
            Weight
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="number"
              placeholder="Enter Weight"
              size="sm"
              value={state.weight}
              onChange={(e) =>
                dispatch({ type: "weight", payload: e.target.value })
              }
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Blood
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.bloodGroup}
              onChange={(e) =>
                dispatch({ type: "bloodGroup", payload: e.target.value })
              }
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            HB Level
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              placeholder="Enter HB Level"
              size="sm"
              value={state.hbLevel}
              onChange={(e) =>
                dispatch({ type: "hbLevel", payload: e.target.value })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Admission Date
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="date"
              placeholder="Enter Admission Date"
              size="sm"
              value={state.admissionDate}
              onChange={(e) =>
                dispatch({ type: "admissionDate", payload: e.target.value })
              }
              required
            />
          </Col>
          <Form.Label as={Col} sm="2">
            Discharge Date
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="date"
              placeholder="Enter Discharge Date"
              size="sm"
              value={state.dischargeDate}
              onChange={(e) =>
                dispatch({ type: "dischargeDate", payload: e.target.value })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Willing to donate?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.willingToDonate}
              onChange={(e) =>
                dispatch({ type: "willingToDonate", payload: e.target.value })
              }
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has covid recovered?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasCovidRecovered}
              onChange={(e) =>
                dispatch({ type: "hasCovidRecovered", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has Cancer patient?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasCancerPatient}
              onChange={(e) =>
                dispatch({ type: "hasCancerPatient", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has HIV?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasHIV}
              onChange={(e) =>
                dispatch({ type: "hasHIV", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has Hepatitis?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasHepatitis}
              onChange={(e) =>
                dispatch({ type: "hasHepatitis", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has BP?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasBP}
              onChange={(e) =>
                dispatch({ type: "hasBP", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has HTLV1?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasHTLV1}
              onChange={(e) =>
                dispatch({ type: "hasHTLV1", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has Heart Ailment?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasHeartAilment}
              onChange={(e) =>
                dispatch({ type: "hasHeartAilment", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has Kidney Ailment?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasKidneyAilment}
              onChange={(e) =>
                dispatch({ type: "hasKidneyAilment", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has Pregnant in Past?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasPrgenantInPast}
              onChange={(e) =>
                dispatch({ type: "hasPrgenantInPast", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has TB?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasTB}
              onChange={(e) =>
                dispatch({ type: "hasTB", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
          <Form.Label as={Col} sm="2">
            Has Tatto?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasTatto}
              onChange={(e) =>
                dispatch({ type: "hasTatto", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm="2">
            Has Surgery?
          </Form.Label>
          <Col sm="4">
            <Form.Control
              as="select"
              value={state.hasSurgery}
              onChange={(e) =>
                dispatch({ type: "hasSurgery", payload: e.target.value })
              }
            >
              <option value="N">No</option>
              <option value="Y">Yes</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" size="sm">
            Submit
          </Button>{" "}
          <Button variant="secondary" type="reset" size="sm">
            Reset
          </Button>
        </div>
      </Form>
      <br />
      {showMessage()}
    </>
  );
};

export default Patient;
