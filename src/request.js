const API_KEY="afabc60cd1be5ee88ce91c6debc08a7e";

const requests={
    
    fetchUpComingMovies : `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularMoviesmovies : `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedMovies:   `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatestesMovies: `/tv/latest?api_key=${API_KEY}&language=en-US`,
    fetchDiscoverMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrendingMovies: `trending/all/week?api_key${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}



export default requests;