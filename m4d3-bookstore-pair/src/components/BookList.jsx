import React from 'react'
import SingleBook from "./SingleBook"
import { Col, Container, Row } from "react-bootstrap"

class BookList extends React.Component {
    render() {
        return (
           <Container>
               <Row>
                    {
                        allBooks.map(currBook => 
                            <Col md={4}>
                                <SingleBook singlebook={currBook}/>
                            </Col>)
                    }
               </Row>
           </Container>
        )
    }
}



export default BookList
