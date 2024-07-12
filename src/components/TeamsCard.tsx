import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import getRoutes from "../routes";

interface TeamsCardProps {
  teamName: string;
  flag: string;
  id: number;
}

const TeamsCard = ({ teamName, flag, id }: TeamsCardProps) => {
  return (
    <Card
      as={Link}
      to={getRoutes.teamCalendarPagePath(id)}
      className="mb-3 text-decoration-none"
    >
      <Card.Body className="text-center  ">
        <Card.Title>{teamName}</Card.Title>
        <Card.Img variant="top" src={flag} />
      </Card.Body>
    </Card>
  );
};

export default TeamsCard;
//as={Link}
//to={getRoutes.teamCalendarPagePath(id)}
