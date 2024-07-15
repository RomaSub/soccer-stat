import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import getRoutes from "../routes";

interface TeamCardProps {
  teamName: string;
  flag: string;
  id: number;
}

const TeamCard = ({ teamName, flag, id }: TeamCardProps) => {
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
      style={{ cursor: "pointer", height: "250px" }}
    >
      <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center">
        <Card.Title>{teamName}</Card.Title>
        <Card.Img
          src={flag}
          style={{ objectFit: "contain", maxHeight: "150px" }}
        />
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
