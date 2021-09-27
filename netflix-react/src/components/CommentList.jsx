import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

const BEARER_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MzA4NTU0MDUsImV4cCI6MTYzMjA2NTAwNX0.4Tu5qyf4RfDfhFLCmPcFzfuazZCgpv5bFANNwuxITi8";
const COMMENTS_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentList = ({ query, title }) => {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // FETCH FX
  const getComments = async () => {
    try {
      const response = await fetch(COMMENTS_URL + query, {
        headers: {
          Authorization: BEARER_TOKEN,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setComments(data);
      } else {
        setIsError(true);
        setIsLoading(false);
        throw new Error("Server Error" + title);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      // throw new Error(error);
      console.log(error)
    }
  };

  // CDM
  useEffect(() => {
    getComments();
  }, []);

  return (
    comments.map((currComment) => (
    <ListGroup className="py-2">
      <ListGroup.Item className="d-flex justify-content-between">
        {currComment.comment}
        <span className="ml-auto">{currComment.rate}</span>
      </ListGroup.Item>
    </ListGroup>
    ))
  )
};

export default CommentList;

// Refactor: too many setThis setThat
