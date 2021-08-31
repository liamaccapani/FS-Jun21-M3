import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'

const AddComment = (props) => {

    // state = {
    //     commentToPost: {
    //         comment: '',
    //         rate: 1,
    //         elementId: null
    //     }
    // }

    const [commentToPost, setCommentToPost] = useState({
        comment: '',
        rate: 1,
        elementId: null
    })

    useEffect(() => { //fx sets the new element ID
        setCommentToPost(currentComment => ({
            ...currentComment,
            elementId: props.asin
        }))
    }, [props.asin])

    //[props.asin, commentToPost] -> infinite loop!

    // componentDidUpdate(prevProps) {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.setState({
    //             commentToPost: {
    //                 ...this.state.comment,
    //                 elementId: this.props.asin
    //             }
    //         })
    //     }
    // }

    const sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(commentToPost),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }

   
    return (
        <div>
            <Form onSubmit={sendComment}>
                <Form.Group>
                    <Form.Label>Comment text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment here"
                        value={commentToPost.comment}
                        onChange={e => setCommentToPost({
                            ...commentToPost,
                            comment: e.target.value
                        })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" value={commentToPost.rate}
                        onChange={e => setCommentToPost({
                            ...commentToPost,
                            rate: e.target.value
                        })}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddComment