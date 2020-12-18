import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Alert, Spinner, Row, Col, Table } from "react-bootstrap";
import "./Upload.css";
import { API } from "../../constants/api";
import { DATA } from "../../constants/en";
import { useHistory } from "react-router-dom";
import { loginContext } from "../../loginContext";

const Upload = () => {
  // Initially, no file is selected
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(DATA.msgChooseFile);
  let history = useHistory();
  const { loggedIn } = useContext(loginContext);

  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [loggedIn, history]);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    if (!selectedFile) {
      return;
    }
    setLoading(true);
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("file", selectedFile, selectedFile.name);

    // Details of the uploaded file
    // console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios
      .post(API.upload, formData)
      .then((res) => {
        setLoading(false);
        if (res && res.data && res.data.statusCode === 200) {
          setSelectedFile(null);
          setMessage(res.data.data);
        }
      })
      .catch((e) => {
        setLoading(false);
        setSelectedFile(null);
        setMessage(DATA.msgError);
      });
  };

  const renderSpinner = () => {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">{DATA.msgUploading}</span>
        </Spinner>
      </div>
    );
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (loading) {
      return renderSpinner();
    }
    if (selectedFile) {
      return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>{DATA.labelFileName}</th>
              <th>{DATA.labelFileType}</th>
              <th>{DATA.labelLastModified}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedFile.name}</td>
              <td>{selectedFile.type}</td>
              <td>{selectedFile.lastModifiedDate.toDateString()}</td>
            </tr>
          </tbody>
        </Table>
      );
    } else {
      return <Alert variant={"primary"}>{message}</Alert>;
    }
  };

  return (
    <>
      <Row>
        <Col
          sm={{ span: 6, offset: 3 }}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
        >
          <h4 className="text-center mar-top-bot-2rem">{DATA.msgUpload}</h4>

          <hr />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Row>
              <Col sm="9" md="9">
                <Form.File
                  id="upload"
                  name="upload"
                  onChange={onFileChange}
                  required
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit" onClick={onFileUpload}>
                  {DATA.btnUpload}
                </Button>
              </Col>
            </Row>
          </Form>
          <br />
          {fileData()}
        </Col>
      </Row>
    </>
  );
};

export default Upload;
