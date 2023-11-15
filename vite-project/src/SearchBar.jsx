import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
import axios from "axios"; // Import the axios library

const onChange = async (e) => {
  const [suggestion, setSuggestion] = useState("");
  var client_id = "685fe7b45b254865ae76e5ef47b00cbf";
  var client_secret = "6bd5fb3f26784a069b771f68efa0e209";

  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "post", // Specify the HTTP method
    headers: {
      Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      "Content-Type": "application/x-www-form-urlencoded", // Specify the content type
    },
    data: "grant_type=client_credentials",
  };

  try {
    const response = await axios(authOptions); // Use axios to make the POST request

    if (response.status === 200) {
      var token = response.data.access_token;
    }

    const inputValue = e.target.value; // Get the input value

    const searchResponse = await fetch(
      "https://api.spotify.com/v1/search?q=" + inputValue + "&type=album",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await searchResponse.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default function SearchBar() {
  const [prefix, setPrefix] = useState(""); // Declare and initialize the prefix state
  const [suggestion, setSuggestion] = useState("");

  return (
    <Container className="mt-5" style={{ justify: "center" }}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <Row style={{ justifyContent: "center" }}>
        <Col sm={5}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search any album..."
              className="me-2 rounded-pill"
              aria-label="Search"
              value={prefix}
              onChange={onChange}
              style={{ width: "120vw" }}
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
