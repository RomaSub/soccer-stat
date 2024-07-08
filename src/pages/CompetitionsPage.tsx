import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import LeagueCard from "../components/LeagueCard";
import { getCompetitions } from "../services/footbalApi";
import CustomSpinner from "../components/Spinner";
import { useState } from "react";

const Competitions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = getCompetitions({});

  if (isLoading) return <CustomSpinner />;

  const filteredCompetitions = searchTerm
    ? data.competitions.filter(
        league =>
          league.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          league.area.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data.competitions;

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row>
        {filteredCompetitions.map((league, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <LeagueCard
              id={league.id}
              leagueName={league.name}
              country={league.area.name}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Competitions;
