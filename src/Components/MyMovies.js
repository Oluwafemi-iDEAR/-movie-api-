import React from "react";

const MyMovies = (props) => {
    return(
        <>
            {props.movies.map((movie, index)=> 
            <div className="justify-content-start m-3 d-md-flex d-sm-block">
                <img src={movie.Poster} alt='movies'></img>
                 <div className="px-3 d-block">
                 <h2>Year Released: {movie.Title}</h2>
                 <h6>Year Released: {movie.Year}</h6>
                 </div>
            </div>)}
        </>
    );
};

export default MyMovies;