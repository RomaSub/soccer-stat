import { getTeams } from "../services/footbalApi.ts";
import TeamsCard from "../components/TeamsCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CustomSpinner from "../components/Spinner.tsx";
import { Col, Container, Row } from "react-bootstrap";

const Teams = () => {
  const { data, isLoading } = getTeams({});

  if (isLoading) return <CustomSpinner />

  return (
    <Container>
      <SearchBar />
      <Row>
        {data.teams.map((team, index) => (
        <Col key={index} xs={12} md={6} lg={4}>
            <TeamsCard  teamName={team.name} flag={team.crest}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
};

export default Teams;
