import React from "react";

const MyMovies = (props) => {
    return(
        <>
            {props.movies.map((movie, index)=> 
            <div className="container">
                <div className="justify-content-start m-3 d-md-flex d-sm-block">
                <img src={movie.Poster} alt='movies'></img>
                 <div className="px-3 d-block">
                 <h2><b>Title:</b> {movie.Title}</h2>
                 <h6><b>Year Released:</b> {movie.Year}</h6>
                 </div>
            </div>
            </div>
            )}
        </>
    );
};

export default MyMovies;