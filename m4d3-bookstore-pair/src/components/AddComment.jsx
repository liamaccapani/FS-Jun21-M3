import React from "react";
import { Button, Form } from "react-bootstrap";

// POST -> We need a State
class AddComment extends React.Component {
    
    state = {
        comment: '',
        rate: 1,
        elementID: ''
    }
  
    render() {
    return (
      <div className="text-center">
        <p>Add your comment!</p>
        <Form.Group>
          <Form.Label>Review this book</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            // value={}
            // onChange={}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rate it</Form.Label>
          <Form.Control
            as="select"
            // value={}
            // onChange={}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit Reservation
        </Button>
      </div>
    );
  }
}

export default AddComment;
