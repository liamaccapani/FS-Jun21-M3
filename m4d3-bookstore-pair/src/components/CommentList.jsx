import { Badge, ListGroup } from 'react-bootstrap'

const CommentList = ({comments}) => {
    return (
        <ListGroup>
            {
                comments.map(c =>  
                    <ListGroup.Item key={c.elementId}>
                        <ListGroup>
                        <ListGroup.Item>{c.comment}</ListGroup.Item>
                        <ListGroup.Item>
                            <Badge bg="secondary">{c.rate}</Badge>
                        </ListGroup.Item>               
                        </ListGroup>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default CommentList