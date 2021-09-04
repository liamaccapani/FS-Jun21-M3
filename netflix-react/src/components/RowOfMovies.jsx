// import React from "react";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

// API_KEY = 4e755041
const MOVIES_URL = "http://www.omdbapi.com/?apikey=4e755041&";

const RowOfMovies = ({ title }) => {
  // initial value -> empty array
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMovies = async () => {
    try {
      const response = await fetch(`${MOVIES_URL}s=${title}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data.Search, "movies fetched");

        setMovies(data.Search);
        // console.log(movies)

        setIsLoading(false);
      } else {
        throw new Error("Frau Blucher " + title);
      }
    } catch (error) {
      console.log(error, "yeet");

      setIsError(true);
      // <Alert variant="danger">
      //     Uh oh, something's not quite right
      // </Alert>;
    }
  };

  // CDM
  useEffect(getMovies, []);

  return (
    <Container fluid>
      <h4>{title}</h4>
      {/* map singlemovie */}
      <Row>
        {
          movies.map(movie => {
            //console.log(movie)
            <SingleMovie
              id={movie.imdbID}
              img={movie.Poster}
              title={movie.title}
            />;
          })
        }
      </Row>
    </Container>
  );
};

export default RowOfMovies;

{
  /* <Button onClick={()=> getMovies()}>Click</Button> */
}
