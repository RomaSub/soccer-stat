import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import LeagueCard from "../components/LeagueCard";
import { getCompetitions } from "../services/footbalApi";
import CustomSpinner from "../components/Spinner";

const Competitions = () => {
  const {data, isLoading} = getCompetitions({})
  if (isLoading) return <CustomSpinner />

  return (
    <Container>
      <SearchBar />
      <Row>
        {data.competitions.map((league, index) => (
        <Col key={index} xs={12} md={6} lg={4}>
            <LeagueCard  id={league.id} leagueName={league.name} country={league.area.name}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
};

export default Competitions;
