// import fantasy from ".src/data/fantasy.json";
// import history from ".src/data/history.json";
// import horror from ".src/data/horror.json";
// import romance from ".src/data/romance.json";
import scifi from "../data/scifi.json";
import { Container, Card, Button } from "react-bootstrap";

const LatestRelease = () => {
  return (
    <Container fluid>
      {/* <Row className="mt-2">
                <Col xs={12} md={4} lg={3}>
                    {
                        scifi.map(book)
                    }
                </Col>
            </Row> */}
      {
          scifi.map(book => {
            <Card key={book.asin}>
            <Card.Img variant="top" src={book.img}/>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.category}</Card.Text>
              <Button variant="success">{book.price}</Button>
            </Card.Body>
          </Card>
          })
      }
    </Container>
  );
};

export default LatestRelease
