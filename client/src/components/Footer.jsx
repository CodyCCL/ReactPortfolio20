import React from "react";
import { Input, Button, Row, Col, Container } from "reactstrap";

const styles = {
  container: {
    position: "abosolute",
    bottom: "0",
    height: "280px",
    lineHeight: "100px",
    textAlign: "center",
  },
  icon: {
    fontSize: "1.5rem",
    margin: "auto .5rem",
    color: "#FD6801",
  },
  input: {
    fontSize: "22px",
    height: "74px",
  },
  button: {
    fontSize: "22px",
    backgroundColor: "#FD6801",
  },
};

const Footer = () => {
  return (
    <Container className="h-90" fluid style={{ backgroundColor: "#77C7CE" }}>
      <Container className="py-5">
        <Row>
          <Col className="py-2" xs={12} md={6}>
            <Input
              type="email"
              placeholder="Enter your email address"
              style={styles.input}
            />
              <Button style={styles.button}>Contact Me</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
