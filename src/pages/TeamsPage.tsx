import { getTeams } from "../services/footbalApi.ts";
import TeamsCard from "../components/TeamsCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CustomSpinner from "../components/Spinner.tsx";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = getTeams({});

  if (isLoading) return <CustomSpinner />;

  const filteredTeams = searchTerm
    ? data.teams.filter(team =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data.teams;

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row>
        {filteredTeams.map((team, index) => (
          <Col key={index} md={2} xs={4}>
            <TeamsCard teamName={team.name} flag={team.crest} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Teams;
//xs={12} md={6} lg={4}
