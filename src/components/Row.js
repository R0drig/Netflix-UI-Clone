import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../axios'
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/"

const Row = (props) => {
  const[movies,setMovies] = useState([])

  useEffect(()=>{
    //fetchData in Loading
    async function fetchData(){
      const request = await instance.get(props.fetchURL);
      console.log(request)
      setMovies(request.data.results)
      return request;
    }
    fetchData()
  },[props.fetchURL])

  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row__posters">
        {movies.map(movie=>(
          <img
          key={movie.id}
          className={`row_poster ${props.isLargeRow && 'row__posterLarge'}`}
          src={`${base_url}${props.isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
          alt={movie.name}/>
        ))}

      </div>


    </div>
  )
}

export default Row