import React from "react";

const MyMovies = (props) => {
    return(
        <>
            {props.movies.map((movie, index)=> 
            <div className="d-flex justify-content-start m-3">
                <img src={movie.Poster} alt='movies'></img>
            </div>)}
        </>
    );
};

export default MyMovies;