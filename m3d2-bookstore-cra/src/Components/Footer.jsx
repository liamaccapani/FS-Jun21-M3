import { Row, Col, Container } from "react-bootstrap";

const Footer = ({color}) => {
    return (
    <Container fluid>
        <Row bg={color}>
            <Col xs={4}>
                <h6>CONTACTS</h6>
            </Col>
            <Col xs={4}>
            <h6>FAQ</h6>
            </Col>
            <Col xs={4}>
                <p>All rights reserved</p>
            </Col>
        </Row>
    </Container>
    )
}

export default Footer