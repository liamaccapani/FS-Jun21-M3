import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";


const Welcome = () => {
  return (
      <Jumbotron>
        <h1>Welcome to Flourish & Blotts</h1>
        <p>Always keep a book with you, in case of emergencies like socializing</p>

        <p>
          <Button variant="primary">I don't do anything (yet)</Button>
        </p>
      </Jumbotron>
  );
};

export default Welcome