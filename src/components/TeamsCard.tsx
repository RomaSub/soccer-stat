import { Card } from "react-bootstrap";

interface TeamsCardProps {
  teamName: string;
  flag: string;
}

const TeamsCard: React.FC<TeamsCardProps> = ({ teamName, flag }) => {
  return (
    <Card className="mb-3">
      <Card.Body className="text-center  ">
        <Card.Title>{teamName}</Card.Title>
        <Card.Img variant="top" src={flag} />
      </Card.Body>
    </Card>
  );
};

export default TeamsCard;
