import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const ACCUWEATHER_LOCATION_KEY: string = "757286";
const ACCUWEATHER_API_KEY: string | undefined =
  process.env.REACT_APP_ACCUWEATHER_API_KEY;

function App() {
  return (
    <>
      <Container className="m-5 p-3 mx-auto">
        <Row>
          <Col>
            <h1>Location</h1>
            <p>Day & date</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>ICON</h1>
          </Col>
          <Col>
            <h2>Temp.</h2>
            <h3>Weather text</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
