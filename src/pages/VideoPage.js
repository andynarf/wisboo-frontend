import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

import Video from "../components/Video";

import './VideoPage.css'

export default function VideoPage({ color }) {
  const { id } = useParams();

  const [videoList, setVideoList] = useState([]);
  const [comments, setComments] = useState([]);
  const [load, setLoad] = useState(5);

  const titleRef = useRef("");
  const [titleState, setTitleState] = useState("");

  async function postData() {
    try {
      await fetch(
        `https://serene-peak-85680.herokuapp.com/videos/${videoList.id}/comments?text=${titleState}`,
        {
          method: "post",
          mode: "no-cors",
        }
      );
      setLoad(Math.random());
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetch("https://serene-peak-85680.herokuapp.com/videos")
      .then((response) => response.json())
      .then((data) => {
        const [selected] = data.filter((video) => video.videoid === id);
        setVideoList(selected);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://serene-peak-85680.herokuapp.com/videos/${videoList.id}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data instanceof Array) {
          setComments(data);
        }
      });
  }, [videoList, load]);

  return (
    <div>
      <Link to="/">volver</Link>
      <div className="title__container">
        <h1> {videoList.title}</h1>
      </div>
      <div className='video-player__container'>
        <Video id={id} color={videoList.color}></Video>
            <label  className='video-player__label' htmlFor="name">Deja tu comentario</label>
        <div className='video-player__input__container'>
  
            <input classname='video-player__input__'
              name="name"
              placeholder="comentario"
              ref={titleRef}
              onChange={() => {
                setTitleState(titleRef.current.value);
              }}
            ></input>
              <button onClick={() => postData()}>comentar</button>
          <p>comentarios</p>
          <ul>
            {comments.map((comment) => {
              return <li key={comment.id}> {comment.text}</li>;
            })}
          </ul>

        </div>
      </div>
    </div>
  );
}
