import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Videos.css";
import Video from "../components/Video";

export default function Videos() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    async function getVideos(){

      try {
        const response = await fetch(`https://serene-peak-85680.herokuapp.com/videos`)

        const data = await response.json()

        setVideoList(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }

    }
    getVideos()

  }, [])



  return (
    <div className="App">
      <div className="link__container">
        <Link to="/upload" className="link__container__link">
          {" "}
          Agregar video
        </Link>
      </div>
      <div className="title__container">
        <h1> Libreria de videos</h1>
      </div>
      <div className="videos__container">
        {videoList.map(({videoid, title, color}) => {
          return (
            <div className="video__library__container">
              <Link to={`video/${videoid}`} color={color}>{title}</Link>
              <Video className="video__video" id={videoid} color={color}></Video>
            </div>
          );
        })}
      </div>
    </div>
  );
}
