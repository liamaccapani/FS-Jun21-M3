import { Navbar, Nav, Container} from "react-bootstrap";

const MyNavbar = ({color}) => {
    return (
      <Navbar bg={color} variant={color}>
        <Container>
          <Navbar.Brand href="#home">The Game</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default MyNavbar