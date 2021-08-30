import React from "react";
import { Button, Container, Form } from "react-bootstrap";

// POST -> We need a State
class AddComment extends React.Component {
    
    state = {
        comment: '',
        rate: 1,
        elementId: ''
    }
    
    postComment = async  (e) => {
      e.preventDefault()
      // const bookId = this.props.bookId

      const commentToPost =  {
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.bookId
      }

      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
          method: 'POST',
          body: JSON.stringify(commentToPost),
          headers: {
            'Content-type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MzAwMTAwODMsImV4cCI6MTYzMTIxOTY4M30.IYE6DU5jYldk8SdSocMrRqffiucDB0xBM0HT5k_OU3w"
          }
        })
        if(response.ok){
          // console.log('aaayy caramba')
          console.log(await response.json())
          

        } else {
          console.log('OOPSIE DAISY')
        }
      
      } catch (error) {
        console.log(error)
      }
    }

    render() {
    return (
      <Container className="text-center">
        <Form onSubmit={this.postComment}>
          <Form.Group>
            <Form.Label>Review this book</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.comment}
              onChange={(e) => this.setState({comment: e.target.value})}
            />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Rate it</Form.Label>
            <Form.Control
              as="select"
              type="number"
              value={this.state.rate}
              onChange={(e) => this.setState({rate: e.target.value})}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
  
          <Button variant="success" type="submit">
            Add comment
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AddComment;
