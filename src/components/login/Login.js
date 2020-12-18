// import logo from "./logo.svg";
import React, { useContext } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { loginContext } from "../../loginContext";

const Login = () => {
  let history = useHistory();
  const { setLoggedIn } = useContext(loginContext);

  return (
    <Row>
      <Col
        sm={{ span: 6, offset: 3 }}
        md={{ span: 6, offset: 3 }}
        lg={{ span: 6, offset: 3 }}
      >
        <br />
        <Card>
          <Card.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value="admin@plasma.com"
                  readOnly
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value="password"
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  setLoggedIn(true);
                  history.push("/patients");
                }}
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
