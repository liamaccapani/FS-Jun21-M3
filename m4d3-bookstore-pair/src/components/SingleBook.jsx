import { Card, Container } from "react-bootstrap";

const SingleBook = ({singlebook}) => {
  return (
    <Container>
        <Card>
          <Card.Img variant="top" src={singlebook.img}/>
          <Card.Body>
            <Card.Title>{singlebook.title}</Card.Title>
          </Card.Body>
        </Card>
    </Container>
  );
};

export default SingleBook;
