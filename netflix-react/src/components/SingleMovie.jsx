import { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";

import CommentArea from "./CommentArea";

const SingleMovie = ({ id, img, movieTitle, type, year }) => {

  const [selected, setIsSelected] = useState(false)

  return (
    <Col key={id} xs={12} md={6} lg={2}>
      <Card
        onClick={() => {
          setIsSelected(!selected)
        }}
        style={{border: selected ? '2px solid green' : 'none'}}
      >
        {selected && <CommentArea movieID={id}/>}
        <Card.Img variant="top" src={img} />
      </Card>
    </Col>
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

{/* <Card.Body>
          <Card.Title>{movieTitle}</Card.Title>
          {/* <Card.Text>
            <p>{type}</p>
            <p>{year}</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}