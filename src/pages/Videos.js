import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Videos.css";
import Video from "../components/Video";


export default function Videos() {
  const [videoList, setVideoList] = useState([]);
  const commetsRef = useRef([])
  const [,forceUpdate] = useState(0)
  const getCommentsCount = async(railsid) => {
    const response = await fetch(
      `https://serene-peak-85680.herokuapp.com/videos/${railsid}/comments`
    )
    const data = await response.json()
    if (data instanceof Array) {
      const [buffer] = [commetsRef.current]
      buffer.push(data.length)
      commetsRef.current = buffer
      forceUpdate(Math.random())
    }
    }
  useEffect(() => {
    async function getVideos(){
      try {
        const response = await fetch(`https://serene-peak-85680.herokuapp.com/videos`)
        const data = await response.json()
        setVideoList(data)
        data.forEach(datum => {
          getCommentsCount(datum.id)
        });
        forceUpdate(Math.random())
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
        {videoList.map(({videoid, title, color, id}, index) => {
          return (
            <div key={videoid} className="video__library__container">
              <Link to={`video/${videoid}`} color={color}>{title}</Link>
              <Video  className="video__video" id={videoid} color={color}></Video>
              <p>{`comentarios : ${commetsRef.current[index]}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}