import { Card, Placeholder } from "react-bootstrap";

const LeagueCardPlaceholder = () => {
  return (
    <Card className="mb-3 border placeholder-glow">
      <Card.Body className="text-center">
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default LeagueCardPlaceholder;
