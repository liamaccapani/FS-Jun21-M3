// import React from "react";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

// API_KEY = 4e755041
const MOVIES_URL = "http://www.omdbapi.com/?apikey=4e755041&";

const RowOfMovies = ({ title }) => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMovies = async () => {
    try {
      const response = await fetch(`${MOVIES_URL}s=${title}`);
      if (response.ok) {
        const data = await response.json();
        //console.log(data.Search, "movies fetched"); 
        //✨✨ data.Search!!!

        setMovies(data);
        // console.log(movies)
        setIsLoading(false);

      } else {
        throw new Error("Server Error" + title);
      }

    } catch (error) {
      // console.log(error, "yeet");
      setIsError(true);
    }
  };

  // CDM
  useEffect(() => {
    getMovies()
  }, []);

  return (
    <Container fluid>
      <h4>{title}</h4>
      {/* map singlemovie */}
      <Row>
        {
          // (isLoading && <Spinner animation="border" variant="dark" />)
          movies.map(movie => 
            console.log(movie)
            // <SingleMovie
            //   id={movie.imdbID}
            //   img={movie.Poster}
            //   movieTitle={movie.Title}
            // />
            // <p>{movie}</p>
          )
        }
      </Row>
    </Container>
  );
};

export default RowOfMovies;

// <Alert variant="danger">
//     Uh oh, something's not quite right
// </Alert>;

{
  /* <Button onClick={()=> getMovies()}>Click</Button> */
}
