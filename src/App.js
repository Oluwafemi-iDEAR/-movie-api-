import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css';
import MyMovies from './Components/MyMovies';
import Navbar from './Components/Navbar';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  let getMovieRequest = async(searchValue) =>{
    // const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=b617af4f'
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b617af4f`
    const response = await fetch(url);

    const responseJson = await response.json();

    // console.log(responseJson);
    if(responseJson.Search){

      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  return(
    <>
    <Navbar heading='CycloVid' searchValue={searchValue} setSearchValue={setSearchValue}/>
    <div className="container-fluid movie col-md-6 ">
      <div className='row'>
      <MyMovies movies = {movies} />
      </div>
    </div>
    </>
    );
};

export default App;
