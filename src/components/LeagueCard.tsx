import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import getRoutes from "../routes";

interface LeagueCardProps {
  leagueName: string;
  country: string;
  id: number;
}

const LeagueCard = ({ leagueName, country, id }: LeagueCardProps) => {
  return (
    <Card
      className="mb-3 text-decoration-none border"
      as={Link}
      to={getRoutes.competitionCalendarPagePath(id)}
    >
      <Card.Body className="text-center">
        <Card.Title>{leagueName}</Card.Title>
        <Card.Text>{country}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LeagueCard;
