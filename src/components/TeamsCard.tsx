import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import getRoutes from "../routes";

interface TeamsCardProps {
  teamName: string;
  flag: string;
  id: number;
}

const TeamsCard = ({ teamName, flag, id }: TeamsCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getRoutes.teamCalendarPagePath(id), {
      state: { teamName }
    });
  };

  return (
    <Card
      className="mb-3 text-decoration-none border"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Card.Body className="text-center  ">
        <Card.Title>{teamName}</Card.Title>
        <Card.Img variant="top" src={flag} />
      </Card.Body>
    </Card>
  );
};

export default TeamsCard;
