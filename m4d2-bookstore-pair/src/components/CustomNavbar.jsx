import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const CustomNavbar = (props) => { //history, location, match
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">
            <div className={props.location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</div>
          </Link>

          <Link to="/features">
            <div className={props.location.pathname === '/features' ? 'nav-link active' : 'nav-link'}>Features</div>
          </Link>

          <Link to="/registration">
            <div className={props.location.pathname === '/registration' ? 'nav-link active' : 'nav-link'}>Registration</div>
          </Link>

        </Nav>
      </Container>
    </Navbar>
  );
};

export default withRouter(CustomNavbar);
