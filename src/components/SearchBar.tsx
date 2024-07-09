import { Form,  InputGroup, Row, Col } from "react-bootstrap";

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
          <InputGroup.Text  >
            <i className="bi bi-search"></i>
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
