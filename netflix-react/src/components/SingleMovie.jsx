import { Button, Card, Col } from "react-bootstrap";

const SingleMovie = ({ id, img, movieTitle, type, year }) => {
  return (
    <Col key={id}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{movieTitle}</Card.Title>
          {/* <Card.Text>
            <p>{type}</p>
            <p>{year}</p>
          </Card.Text> */}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleMovie;

{
  /* <Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>; */
}
