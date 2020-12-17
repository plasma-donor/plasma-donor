import { Button, Card, Col, Row } from "react-bootstrap";

const Share = () => {
  return (
    <Row>
      <Col
        sm={{ span: 6, offset: 3 }}
        md={{ span: 6, offset: 3 }}
        lg={{ span: 6, offset: 3 }}
      >
        <br />
        <Card>
          <Card.Header>
            <h4>Thank You</h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Your one step can save a million lives. Thanks for being one of
              the most genuine plasma donor.
            </Card.Title>
            <Card.Text>
              <a
                style={{ color: "#017374 !important", marginRight: "1rem" }}
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button"
                data-text="Be The Solution &amp; Become a #PlasmaDonor Today!"
                data-via="plasma52970878"
                data-hashtags="#donateplasma"
                data-lang="en"
                data-show-count="false"
              >
                <Button
                  style={{ height: "1.7rem", width:"5rem", paddingTop: 0 }}
                  variant="success"
                  size="sm"
                >
                  Tweet
                </Button>
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>

              <span
                class="fb-share-button"
                data-href="https://plasma-donor.github.io/plasma-donor/#/fbshare"
                data-layout="button"
                data-size="large"
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fplasma-donor.github.io%2Fplasma%2F%23%2Ffbshare&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                >
                  {/* <Button variant="primary" size="sm">FB Share</Button> */}
                </a>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Share;
