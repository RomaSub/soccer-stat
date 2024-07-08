import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCompetitionMatches } from "../services/footbalApi";
import CustomSpinner from "../components/Spinner";
import { useState } from "react";
import CompetitionList from "../components/CompetitionList";
import DateFilter from "../components/DateFilter";
import CustomBreadcrumbs from "../components/Breadcrumbs";
import getRoutes from "../routes";

const CompetitionCalendar = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const { id } = useParams();

  const { data, isLoading, isError, status } = getCompetitionMatches({
    id,
    dateFrom,
    dateTo
  });
  
  if (isError) return <div>{status}</div>

  if (isLoading) return <CustomSpinner />;

  return (
    <Container>
      <CustomBreadcrumbs
        type={"Лиги"}
        name={data.competition.name}
        path={getRoutes.competitionsPagePath()}
      />
      <h3 className="mb-3">Матчи</h3>
      <DateFilter
        onDateChange={(from, to) => {
          setDateFrom(from);
          setDateTo(to);
        }}
      />
      <CompetitionList matches={data.matches} />
    </Container>
  );
};

export default CompetitionCalendar;
