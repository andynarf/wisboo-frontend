import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Videos.css'
import Video from "../components/Video";

export default function Videos() {
  const [videoList, setvideoList] = useState([
    "vuw0ay27tr",
    "vuw0ay27tr",
    "vuw0ay27tr",
    "vuw0ay27tr",
    "vuw0ay27tr",
    "vuw0ay27tr",
  ]);
  return (
    <div className="App">
        <div className='link__container'>
            <Link to='/upload' className='link__container__link' > Agregar video</Link>
        </div>
      <div className="title__container">
        <h1> Libreria de videos</h1>
      </div>
      <div className="videos__container">
        {videoList.map((video) => {
          return <div className='video__library__container'> 
          <Link to={`video/${video}`}>Video Title</Link><Video className='video__video' id={video}></Video>
          
          </div>
        })}
      </div>
    </div>
  );
}
