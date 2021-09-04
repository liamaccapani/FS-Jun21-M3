import { Card, Col } from "react-bootstrap";

const SingleMovie = ({id, img, title}) => {
  return (
    <Col>
        <Card>
          <Card.Img variant="top" src={img} alt={title} />
        </Card>
    </Col>
  );
};

export default SingleMovie;

{/* <Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>; */}
