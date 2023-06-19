import React, { useState,useEffect } from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const imagepath="https://image.tmdb.org/t/p/original/";
function Row({ title,fetchUrl,isLargeRow }) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>
    {
        async function fetchData()
        {
            const requests=await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    },[fetchUrl]);
    const opts={
        height: "390",
        width: "100%",
        playervars:{
            autoplay: 1
        },
    };
    const  handlemovie=(movie)=>
    {
        if(trailerUrl)
        {
            setTrailerUrl('');
        }
      
    }
        return ( 
        <div className='row'>
            <h3>{title}</h3>

            <div className='row_posters'>

                {movies.map(movie=>  (  
                   
             <img
                onClick={()=>handlemovie(movie)}
                key={movie.id} className={`row_poster && ${ isLargeRow && "row_posterLarge"}`}
                src={`${imagepath}${ isLargeRow? movie.poster_path : movie.backdrop_path}`}
                alt={movie.original_title} ></img>
                ))}

            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
          
        </div>
     );
}

export default Row;