import React from "react";
import { Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";


class SingleBook2 extends React.Component {

    state = {
        isSelected: false
    }
  
  render(){
      return (
      <>
          <Container className="d-flex justify-content-between">
              <Card 
              //isSelected:true -> no toggle
              //isSelected:!isSelected -> toggle
              onClick={()=> this.setState({isSelected: !this.state.isSelected})}
              style={{border: this.state.isSelected ? '2px solid green' : 'none'}}
              >
                <Card.Img variant="top" src={this.props.singlebook.img}/>
                <Card.Body>
                  <Card.Title>{this.props.singlebook.title}</Card.Title>
                </Card.Body>
              </Card>

              <CommentArea bookId={this.props.singlebook.asin}/>
          </Container>
           
      </>
    );
  }
};

export default SingleBook2;