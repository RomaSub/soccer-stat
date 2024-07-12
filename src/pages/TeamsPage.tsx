import { getTeams } from "../services/footbalApi.ts";
import TeamsCard from "../components/TeamsCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CustomSpinner from "../components/Spinner.tsx";
import CustomPagination from "../components/Pagination.tsx";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

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

  const startIndex = (currentPage - 1) * pageSize;
  const currentPageTeams = filteredTeams.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Row>
        {currentPageTeams.map((team: Team, index: number) => (
          <Col key={index} md={2} xs={4}>
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
