import { Badge } from "react-bootstrap";

const MyBadge = ({text, color}) => {
    return (
        <Badge variant={color}>{text}</Badge>
    )
}

export default MyBadge