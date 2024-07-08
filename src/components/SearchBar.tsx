import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Row>
      <Col md={4} className="mt-3 mb-3">
        <InputGroup>
          <Form.Control
            placeholder="Поиск"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2">
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
