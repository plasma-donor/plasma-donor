import { Card, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <Row>
      <Col
        sm={{ span: 6, offset: 3 }}
        md={{ span: 6, offset: 3 }}
        lg={{ span: 6, offset: 3 }}
      >
        <br />
        <Card>
          <Card.Header>About Us</Card.Header>
          <Card.Body>
            <Card.Title>About Us</Card.Title>
            <Card.Text>About Us.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
