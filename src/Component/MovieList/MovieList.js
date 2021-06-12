import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css';
import {Link} from'react-router-dom';
function MovieList({listMovie}) {

    return (
        <div className=' MovieList'>
           {listMovie.map((movie,key)=>(
        
               <Link to={`/${movie.title}`}>
               <MovieCard className="MovieCard" movie={movie} key={key}/>
               </Link>
           ))}
        </div>
    )
}

export default MovieList
