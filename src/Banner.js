import React,{useState,useEffect} from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css';
function Banner() {
    const [movies,setMovies]=useState([]);
    useEffect(
        () => {
            async function fetchdata(){
                const request=await axios.get(requests.fetchNetflixOriginals);
                setMovies(request.data.results[ Math.floor(Math.random()* request.data.results.length -1)]);
                return request;
            }
            fetchdata();
        }
        ,[]
    );
        console.log(movies);
        function truncateString(str, num) {
            if (str.length <= num) {
              return str;
            } else {
              return str.slice(0, num > 3 ? num - 3 : num) + '...';
            }
          }
  return (
    <header className='banner'
        style={
            {
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: 'centre centre',
            }
        }
    >
        <div className='banner_contents'>
           <h1 className='banner_title'>
            {movies?.title || movies?.name || movies?.original_name}
           </h1>
           <div className='banner_buttons'>
              <button className='banner_button'>
                Play
              </button>
              <button className='banner_button'>
                My List
              </button>
           </div>
           <div>
                <h1  className='banner_description'>
                   truncateString( {movies?.overview},150);
                </h1>
           </div>
          
        </div>
        <div className='banner_fadebottom'>

</div>
    </header>
  )
}

export default Banner
