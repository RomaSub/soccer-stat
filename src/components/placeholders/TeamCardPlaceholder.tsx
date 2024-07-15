import { Card, Placeholder } from "react-bootstrap";

const TeamCardPlaceholder = () => {
  return (
    <Card className="mb-3 border placeholder-glow" style={{ height: "250px" }}>
      <Card.Body className="text-center">
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default TeamCardPlaceholder;
