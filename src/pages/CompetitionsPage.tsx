import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import LeagueCard from "../components/LeagueCard";
import { getCompetitions } from "../services/footbalApi";
import { useEffect, useState } from "react";
import CustomPagination from "../components/Pagination";
import getChunks from "../utils/getChunks";
import CompetitionsPlaceholder from "../components/placeholders/CompetitionsPagePlaceholders";

interface League {
  id: number;
  name: string;
  area: {
    name: string;
  };
}

const Competitions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError, status } = getCompetitions({});
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (isLoading) return <CompetitionsPlaceholder pageSize={pageSize} />;
  if (isError) return <div>{`статус ошибки: ${status}`}</div>;

  const filteredCompetitions = searchTerm
    ? data.competitions.filter(
        (league: League) =>
          league.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          league.area.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data.competitions;

  const competitionsChunks = getChunks<League>(
    filteredCompetitions,
    currentPage,
    pageSize
  );

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row>
        {competitionsChunks.map((league: League, index: number) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <LeagueCard
              id={league.id}
              leagueName={league.name}
              country={league.area.name}
            />
          </Col>
        ))}
      </Row>
      <CustomPagination
        itemsCount={filteredCompetitions.length}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Competitions;
