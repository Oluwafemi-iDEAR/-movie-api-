import React from 'react';
import '../App.css';

const Navbar = (props) => {
  return (
    <div>
 
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://cyclobold.com/">{props.heading}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">[=]</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://cyclobold.com/">School</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" value={props.value} onChange={(event)=> props.setSearchValue(event.target.value)} placeholder="searching for something?"/>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import '../App.css';
// import MyMovies from "./MyMovies";


// const Navbar = () =>{
//     const [movies, setMovies] = useState([
//         { Title: "Guardians of the Galaxy Vol. 2",
//          Year: "2017",
//          imdbID: "tt3896198",
//          Type: "movie",
//          Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00…UtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
//         },
//     ]);
//     return 
//     <>
//         <MyMovies movies={movies}/>
//     </>
// };

// export default Navbar;