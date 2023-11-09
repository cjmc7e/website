import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'

export default function SearchBar() {
  return (
    <Container className="mt-5" style={{justify: "center"}}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      <Row style={{justifyContent: 'center'}}>
        <Col sm={5}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search any album..."
              className="me-2 rounded-pill"
              aria-label="Search"
              style={{width: "120vw"}}
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