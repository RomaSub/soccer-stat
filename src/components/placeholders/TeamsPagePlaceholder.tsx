import { Col, Container, Row } from "react-bootstrap";
import SearchBarPlaceholder from "./SearchBarPlaceholder";
import TeamCardPlaceholder from "./TeamCardPlaceholder";

const TeamsPlaceholder = ({ pageSize }: { pageSize: number }) => {
  const placeholders = Array.from({ length: pageSize }).map((_, index) => (
    <Col key={index} md={4} xs={6} lg={2}>
      <TeamCardPlaceholder />
    </Col>
  ));

  return (
    <Container>
      <SearchBarPlaceholder />
      <Row>{placeholders}</Row>
    </Container>
  );
};

export default TeamsPlaceholder;
