import { Col, Container, Row } from "react-bootstrap";
import SearchBarPlaceholder from "./SearchBarPlaceholder";
import LeagueCardPlaceholder from "./LeagueCardPlaceholder";

const CompetitionsPlaceholder = ({ pageSize }: { pageSize: number }) => {
  const placeholders = Array.from({ length: pageSize }).map((_, index) => (
    <Col key={index} xs={12} md={6} lg={4}>
      <LeagueCardPlaceholder />
    </Col>
  ));

  return (
    <Container>
      <SearchBarPlaceholder />
      <Row>{placeholders}</Row>
    </Container>
  );
};

export default CompetitionsPlaceholder;
