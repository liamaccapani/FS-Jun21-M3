import { Container, Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="d-flex justify-content-start my-3">
      <h3 className="mr-3">TV Shows</h3>
      <Dropdown className="ml-2">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Genres
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Movie 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Movie 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default Header;
