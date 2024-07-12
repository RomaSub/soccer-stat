import { getTeams } from "../services/footbalApi.ts";
import TeamsCard from "../components/TeamsCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CustomSpinner from "../components/Spinner.tsx";
import CustomPagination from "../components/Pagination.tsx";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import getChunks from "../utils/getChunks.ts";

interface Team {
  name: string;
  crestUrl: string;
  id: number;
}

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError, status } = getTeams({});
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (isError) return <div>{`статус ошибки: ${status}`}</div>;
  if (isLoading) return <CustomSpinner />;

  const filteredTeams = searchTerm
    ? data.teams.filter((team: Team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data.teams;

  const teamsChunks = getChunks<Team>(filteredTeams, currentPage, pageSize);

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row>
        {teamsChunks.map((team: Team, index: number) => (
          <Col key={index} md={4} xs={6} lg={2}>
            <TeamsCard teamName={team.name} id={team.id} flag={team.crestUrl} />
          </Col>
        ))}
      </Row>
      <CustomPagination
        itemsCount={filteredTeams.length}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Teams;
