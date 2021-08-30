import React from "react";
import { Button, Form } from "react-bootstrap";

// POST -> We need a State
class AddComment extends React.Component {
    
    state = {
        commentToPost: {
          comment: '',
          rate: 1,
          elementId: ''
        }
    }
    
    postComment = async  (e) => {
      e.preventDefault()
      // console.log('You did it')
      // const toSend = {
      //   comment: this.setState.comment,
      //   rate: this.setState.rate,
      //   elementId: this.props.bookId
      // }
      try {
        // const elementId = this.props.elementId
        const bookId = this.props.bookId
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + bookId, {
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
      <div className="text-center">
        <Form.Group onClick={}>
          <Form.Label>Review this book</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.comment}
            onChange={(e) => this.setState({commentToPost: {...this.state.commentToPost, comment: e.target.value}})}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rate it</Form.Label>
          <Form.Control
            as="select"
            value={this.state.rate}
            onChange={(e) => this.setState({commentToPost: {...this.state.commentToPost, rate: e.target.value}})}
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
      </div>
    );
  }
}

export default AddComment;
