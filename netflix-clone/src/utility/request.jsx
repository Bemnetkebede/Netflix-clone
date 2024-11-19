const API_KEY = import.meta.env.VITE_API_KEY

const requests = {
    Trending : `/trending/movie/day?api_key=${API_KEY}`,
    netflixOriginal : `/discover/tv?with_networks=213&api_key=${API_KEY}`,
    topRated : `/movie/top_rated?api_key=${API_KEY}`,
    actionMoveis : `/discover/movie?with_genres=28&api_key=${API_KEY}`,
    horrorMovies : `/discover/movie?with_genres=27&api_key=${API_KEY}`,
    romanceMovies : `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
    documentries : `/discover/movie?with_genres=99&api_key=${API_KEY}`,
    comedyMovies : `/discover/movie?with_genres=35&api_key=${API_KEY}`,
    tvShow : `/tv/popular?api_key=${API_KEY}`
}
export default requests;