import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getCompetitionMatches } from "../services/footbalApi";
import CustomSpinner from "../components/Spinner";
import { useEffect } from "react";
import CompetitionList from "../components/CompetitionList";
import CustomBreadcrumbs from "../components/Breadcrumbs";
import getRoutes from "../routes";

const CompetitionCalendar = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = getCompetitionMatches(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) navigate("/404");
  }, [isError, navigate]);

  if (isLoading) return <CustomSpinner />;

  return (
    <Container>
      <CustomBreadcrumbs type={'Лиги'} name={data.competition.name} path={getRoutes.competitionsPagePath()}/>
      <CompetitionList matches={data.matches}/>
    </Container>
  );
};

export default CompetitionCalendar;
