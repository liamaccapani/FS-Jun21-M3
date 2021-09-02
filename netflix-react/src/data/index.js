// http://www.omdbapi.com/?apikey=4e755041&i=tt0241527
//4e755041
// http://www.omdbapi.com/?apikey=[YOUR API KEY]&i=tt0241527

// {
//     "comment": "A good movie but definitely I don't like many parts of the plot",
//     "rate": 3,
//     "elementId": "tt1756545"
// }

const movie_url = 'http://www.omdbapi.com/?apikey=4e755041&i=tt0241527'
const comments_url = 'https://striveschool-api.herokuapp.com/api/comments/'

const getMovies = async () => {
    try {
        const response = await fetch(movie_url)
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
			throw new Error("Couldnt fetch data");
		}
	} catch (error) {
		console.log(error);
		throw error;
	}
}

