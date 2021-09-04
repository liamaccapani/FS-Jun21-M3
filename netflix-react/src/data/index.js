// http://www.omdbapi.com/?apikey=4e755041&i=tt0241527
//4e755041
// http://www.omdbapi.com/?apikey=[YOUR API KEY]&i=tt0241527

// {
//     "comment": "A good movie but definitely I don't like many parts of the plot",
//     "rate": 3,
//     "elementId": "tt1756545"
// }

const MOVIES_URL = "http://www.omdbapi.com/?apikey=4e755041&";
const COMMENTS_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const getMovies = async () => {
  try {
    const response = await fetch(`${MOVIES_URL}s=${title}`);
    if (response.ok) {
      const data = await response.json();
      return data;

    } else {
      throw new Error("Frau Blucher" + title);
    }
  } catch (error) {
    console.log(error);
    <Alert variant="danger">
        Uh oh, something's not quite right
    </Alert>;
  }
};


const getComments = async () => {
    try {
        const response = await fetch(COMMENTS_URL)
        if(response.ok){
            const data = await response.json()
            return data

        } else {
            throw new Error ("Frau Blucher")
        }
    } catch (error) {
        console.log(error);
    <Alert variant="danger">
        Uh oh, something's not quite right
    </Alert>;
    }
}




export default getComments;
export default getMovies;
