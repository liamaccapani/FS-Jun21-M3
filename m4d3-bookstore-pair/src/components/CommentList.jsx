import { ListGroup } from 'react-bootstrap'
import MyBadge from './MyBadge'

const CommentList = (props) => {
    return (
        <ListGroup>
            {
                props.comments.map(c =>  
                    <ListGroup.Item key={c.elementId}>
                        <ListGroup>
                        <ListGroup.Item>{c.comment}</ListGroup.Item>
                        <ListGroup.Item>
                            <MyBadge color="primary" text={c.rate} />
                        </ListGroup.Item>               
                        </ListGroup>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default CommentList