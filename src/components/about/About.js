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
            {/* <Card.Title>About Us</Card.Title> */}
            <Card.Text>
              We help to CONNECTING THOSE IN NEED. Please join us in with
              fighting against Corona Virus.
              <br />
              <br />
              For more details or any queries please write us @
              plasma.donor.demo@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
