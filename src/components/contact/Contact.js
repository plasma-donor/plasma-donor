import { Card, Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Row>
      <Col
        sm={{ span: 6, offset: 3 }}
        md={{ span: 6, offset: 3 }}
        lg={{ span: 6, offset: 3 }}
      >
        <br />
        <Card>
          <Card.Header>Contact Us</Card.Header>
          <Card.Body>
            <Card.Title>Contact Us</Card.Title>
            <Card.Text>Contact Us.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Contact;
