import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getCompetitionMatches } from "../services/footbalApi";
import CustomSpinner from "../components/Spinner";
import { useEffect } from "react";
import CompetitionList from "../components/CompetitionList";

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
      <CompetitionList matches={data.matches}/>
    </Container>
  );
};

export default CompetitionCalendar;
