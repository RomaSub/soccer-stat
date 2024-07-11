import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import getRoutes from "../routes";

interface TeamsCardProps {
  teamName: string;
  flag: string;
  id: number;
}

const TeamsCard: React.FC<TeamsCardProps> = ({ teamName, flag, id }) => {
  return (
    <Card
      className="mb-3 text-decoration-none"
      as={Link}
      to={getRoutes.teamCalendarPagePath(id)}
    >
      <Card.Body className="text-center  ">
        <Card.Title>{teamName}</Card.Title>
        <Card.Img variant="top" src={flag} />
      </Card.Body>
    </Card>
  );
};

export default TeamsCard;
