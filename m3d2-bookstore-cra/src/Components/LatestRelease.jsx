// import fantasy from "../data/fantasy.json";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const LatestRelease = (props) => {
  return (
    <Container fluid>
      <Row>
      {
        scifi.map((book) => {
            return (
            <Col xs={6} md={4} lg={3} key={book.asin}>
                <Card className="h-100 py-2">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Button variant="success">{book.price}</Button>
                    </Card.Body>
                </Card>
            </Col>
            )
        })
        }
      </Row>
    </Container>
  );
};

export default LatestRelease;


