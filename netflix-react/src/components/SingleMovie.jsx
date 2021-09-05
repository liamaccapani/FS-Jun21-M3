import { useState } from "react";
import { Button, Card, Col, Container, Modal } from "react-bootstrap";

import CommentList from "./CommentList";
// import MoviePreview from "./MoviePreview";

const SingleMovie = ({ id, img, title, type, year }) => {
  const [selected, setIsSelected] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col xs={12} md={6} lg={2}>
        <Card.Img src={img} onClick={setShow} />
      </Col>

      {/* <Container fluid className ={selected ? "d-block" : "d-none"} >
      </Container> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {title}, {year}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card.Img src={img} />
          <CommentList query={id} title={title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add Comment</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleMovie;



{
  /* <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      <p>{type}</p>
      <p>{year}</p>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body> */
}


// return (
//   <Col key={id} xs={12} md={6} lg={2}>
//     <Card
//       onClick={() => {
//         setIsSelected(!selected);
//       }}
//       style={{ border: selected ? "2px solid green" : "none" }}
//     >
//       {selected && (
//         <CommentArea
//           movieID={id}
//           title={title}
//           movieYear={year}
//           movieImg={img}
//         />
//       )}
//       <Card.Img variant="top" src={img} />
//     </Card>
//   </Col>
// );
