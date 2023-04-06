import React from "react";
import './App.css'
import Login from './pages/Login';
import Signin from './pages/Signin.jsx';
import Home from './pages/Home.jsx';
import PLayer from "./pages/Player";
import Movies from "./pages/Movies";
import Randamizor from './pages/Randamizor'
import {  
   
  Routes,  
  Route,  
   
  BrowserRouter
}   
from 'react-router-dom';  
import MoviePage from "./pages/MoviePage";

function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Signin></Signin> } ></Route>
    <Route path="/home" element={<Home></Home> } ></Route>
    <Route path="/login" element={<Login></Login> } ></Route>
    <Route path="/player"  element={<PLayer></PLayer> } ></Route>
    <Route path="/search-movies" element={<MoviePage></MoviePage>}></Route>
    <Route path="/random" element={<Randamizor></Randamizor>}></Route>
    <Route path="/search-movies/player" element={<PLayer></PLayer>}></Route>
    <Route path="/movies" element={<Movies></Movies>}></Route>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
