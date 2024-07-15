import { Form, InputGroup, Row, Col, Placeholder } from "react-bootstrap";

const SearchBarPlaceholder = () => {
  return (
    <Row>
      <Col md={4} className="mt-3 mb-3">
        <InputGroup>
          <Placeholder as={Form.Control} animation="glow" />
          <InputGroup.Text>
            <Placeholder xs={12} />
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchBarPlaceholder;
