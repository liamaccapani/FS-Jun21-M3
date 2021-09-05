import { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";

import CommentList from "./CommentList";

const SingleMovie = ({ id, img, title, type, year }) => {
  const [selected, setIsSelected] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Col xs={12} md={6} lg={2}>
        <Card.Img src={img} onClick={handleShow}/>
      </Col>

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
          <CommentList query={id} title={title}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => }>Add Comment</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleMovie;

// const fetchComments = async (query) => {
//   try {
//     const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + query, {
//       headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MzA4NDEyNjUsImV4cCI6MTYzMjA1MDg2NX0.HcgsX454Vtx8lsbQqfUq05Rwsmoa21I5OWRyvf0K74g'
//       }
//     })
//     if(response.ok){
//       const data = await response.json()
//       console.log(data)
//     }

//   } catch (error) {
//     console.log('Error!' + error)
//   }
// }

{
  /* <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>
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
