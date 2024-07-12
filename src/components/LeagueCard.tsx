import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import getRoutes from "../routes";

interface LeagueCardProps {
  leagueName: string;
  country: string;
  id: number;
}

const LeagueCard = ({ leagueName, country, id }: LeagueCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getRoutes.competitionCalendarPagePath(id), {
      state: { leagueName }
    });
  };

  return (
    <Card
      className="mb-3 text-decoration-none border"
      onClick={handleClick}
      style={{ cursor: "pointer " }}
    >
      <Card.Body className="text-center">
        <Card.Title>{leagueName}</Card.Title>
        <Card.Text>{country}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LeagueCard;
