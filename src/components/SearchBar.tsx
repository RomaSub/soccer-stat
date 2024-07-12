import { Form, InputGroup, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  const { t } = useTranslation();

  return (
    <Row>
      <Col md={4} className="mt-3 mb-3">
        <InputGroup>
          <Form.Control
            placeholder={t("search")}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
