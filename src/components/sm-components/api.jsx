import axios from 'axios'

const baseURL = import.meta.env.VITE_REACT_APP_BASEURL
const apiKey = import.meta.env.VITE_REACT_APP_APIKEY


export const getMovies = async () => {
    const movie = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovies = async (q) => {
    const search = await axios.get(`${baseURL}/search/movie?api_key=${apiKey}&query=${q}&page=1`)
    return search.data
}
