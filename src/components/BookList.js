import React, { Component } from "react";
import "../assets/css/booklist.css";
import { Container, Row, Col } from "react-bootstrap";

export default class BookList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={2} md={4}></Col>
          <Col xs={8} md={4} className="text-center">
            <div className="booklist">
              <ul>
                <li>Harry Potter</li>
                <li>Dune</li>
                <li>Lord of the Rings</li>
              </ul>
            </div>
          </Col>
          <Col xs={2} md={4}></Col>
        </Row>
      </Container>
    );
  }
}
