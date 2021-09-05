// import React from "react";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Carousel,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import SingleMovie from "./SingleMovie";

// API_KEY = 4e755041
const MOVIES_URL = "http://www.omdbapi.com/?apikey=4e755041&";

const RowOfMovies = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // FETCH FX
  const getMovies = async () => {
    try {
      const response = await fetch(`${MOVIES_URL}s=${title.toLowerCase()}`);
      if (response.ok) {
        const data = await response.json();
        //✨✨ store in variable!
        const fetchedMovies = data.Search;
        setMovies(fetchedMovies);
        setIsLoading(false);
      } else {
        // setIsLoading(false);
        setIsError(true);
        throw new Error("Server Error" + title);
      }
    } catch (error) {
      // setIsLoading(false);
      setIsError(true);
      throw new Error(error);
    }
  };

  // CDM
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container fluid className="mb-4">
      <h4>{title}</h4>
      {isLoading && (
        <Spinner animation="border" variant="dark" className="mx-auto" />
      )}

      <Row>
        {movies.slice(0, 6).map((movie) => (
          // console.log(movie)
          <SingleMovie
            id={movie.imdbID}
            img={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
        ))}

        {/* {
              movies.slice(4).map((movie) => (
                // console.log(movie)
                <SingleMovie
                  id={movie.imdbID}
                  img={movie.Poster}
                  movieTitle={movie.Title}
                />
              ))
            } */}
      </Row>
    </Container>
  );
};

export default RowOfMovies;
