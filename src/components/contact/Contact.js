import { Card, Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Row>
      <Col
        // sm={{ span: 6, offset: 3 }}
        // md={{ span: 6, offset: 3 }}
        // lg={{ span: 6, offset: 3 }}
      >
        <br />
        <Card>
          <Card.Header>FAQ</Card.Header>
          <Card.Body>
            {/* <Card.Title>Contact Us</Card.Title> */}
            <Card.Text>
              <p>Welcome to Plasma Donor Registration Portal</p>
              <p>
                If you have fully recovered from COVID-19, you may be able to
                help patients currently fighting the infection by donating your
                plasma.
              </p>
              <p>Here is the list of FAQ's about Plasma donation</p>
              <br />
              <p>
                <p>
                  1) Who can donate To donate plasma you will need to:
                  <ul>
                    <li>
                      have had coronavirus (either a positive test or symptoms)
                    </li>
                    <li>be over 17</li>
                    <li>be able to travel to one of our donor centres</li>
                    <li>have enough blood to donate safely</li>
                  </ul>
                </p>
                <br />
                <p>2) Importance of Plasma Donation</p>
                <p>
                  Only a small number of people living in the India who are
                  eligible to donate blood or source plasma actually donate.
                  What's important is that we encourage all forms of donation
                  from those who are eligible, so that they may contribute
                  life-saving blood and source plasma to those in need.
                </p>
                <p>
                  The plasma protein therapeutics industry supports volunteerism
                  donation in all of its forms. Source plasma donation and blood
                  donation are critically important activities that contribute
                  to saving lives. Source plasma and recovered plasma are used
                  to produce therapies that treat people with rare, chronic
                  diseases and disorders such as primary immunodeficiency,
                  hemophilia and a genetic lung disease, as well as in the
                  treatment of trauma, burns and shock. Whole blood donations
                  most often are used locally in hospitals for transfusions
                  required during surgery or other medical treatment. Find a
                  donation center near you!
                </p>
                <p>
                  Plasma donation requires a commitment both in the amount of
                  time for each donation and frequency of donation. Typically it
                  takes between one and three hours to donate source plasma, and
                  plasma can be donated twice within a seven day period. Whole
                  blood donation takes less time—under 30 minutes—and donors
                  donate less frequently—no more than once in eight weeks. The
                  programs may fit into a donor's life differently at various
                  times in the donor's life, and are equally important in
                  helping to fulfill a vital medical need.
                </p>
                <br />
                <p>3) Process of Plasma Donation</p>
                <p>
                  You do need to bring the following identification with you:
                </p>
                <p>
                  Current photo I.D. Social Security or Border Crossing ID Proof
                  of local address Once you enter the donation center
                </p>
                <p>
                  A receptionist will greet you and check your I.D. If it is
                  your first visit, you will receive a physical examination.
                </p>
                <p>
                  A center technician will take a small blood sample from your
                  finger to check your protein and hematocrit levels. Complete a
                  Donor History Questionnaire.
                </p>
                If the center staff determines that you are eligible to donate
                plasma, you will be taken to the donation area and seated in a
                comfortable seating bed.
              </p>
              <p>
                A technician will prepare your arm with antiseptic, insert the
                needle, and begin the donation process. Blood will be drawn,
                plasma will be separated from your blood, and red blood cells
                will be returned to your body through a process called
                plasmapheresis.
              </p>
              <p>
                Your first donation will take approximately 2 hours. Return
                visits on average take about 90 minutes. When you are finished,
                you will check out and receive compensation to thank you for
                your time. The amount of compensation is determined by each
                plasma collection facility. A staff member at the plasma center
                will be available to answer any questions you may have.
              </p>
              <br />
              <p>4) Your Personal Health and Safety</p>
              <p>
                Your safety and health are of utmost importance. All equipment
                and materials are sterile and for one-time use only. Center
                staff receives ongoing training to provide a safe and pleasant
                experience. Plasma donation is strictly regulated by government
                authorities. In addition, companies adhere to voluntary
                standards through International Quality Plasma Program
                certification. Centers are inspected and certified by
                independent auditors and adhere to regulatory reporting
                requirements.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Contact;
