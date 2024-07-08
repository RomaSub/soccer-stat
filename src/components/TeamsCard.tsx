import { Card } from "react-bootstrap";

const TeamsCard = ({ teamName, flag }) => {

  return (
    <Card className="mb-3">
      <Card.Body className='text-center'>
        <Card.Title>{teamName}</Card.Title>
        <Card.Img variant="top" src={flag} />
      </Card.Body>
    </Card>
  );
};

export default TeamsCard;
