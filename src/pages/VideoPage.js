import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

import Video from "../components/Video";

export default function VideoPage({ color }) {
  const { id } = useParams();

  const [videoList, setVideoList] = useState([]);
  const [comments, setComments] = useState([]);
  const [load, setLoad] = useState(5);

  const titleRef = useRef("");
  const [titleState, setTitleState] = useState("");

  async function postData() {
    try {
      let result = await fetch(
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
        console.log({ data });

        const [selected] = data.filter((video) => video.videoid === id);

        console.log(selected);
        setVideoList(selected);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://serene-peak-85680.herokuapp.com/videos/${videoList.id}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data instanceof Array) {
          setComments(data);
        }
      });
  }, [videoList, load]);

  console.log("comments : " + JSON.stringify(comments));
  return (
    <div>
      <Link to="/">volver</Link>
      <Video id={id} color={videoList.color}></Video>
      <div>
        <p>comentarios</p>
        <ul>
          {comments.map((comment) => {
            return <li> {comment.text}</li>;
          })}
        </ul>
        <label htmlFor="name">Deja tu comentario</label>

        <input
          name="name"
          placeholder="titulo del video"
          ref={titleRef}
          onChange={() => {
            setTitleState(titleRef.current.value);
          }}
        ></input>

        <button onClick={() => postData()}>comentar</button>
      </div>
    </div>
  );
}
