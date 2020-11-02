import React, { useState, useRef } from "react";
import Uploader from "../components/Uploader";
import { Link } from "react-router-dom";
import { SketchPicker } from "react-color";

import "./Upload.css";

export default function Upload() {
  const titleRef = useRef("");
  const [color, setColor] = useState("#424459");
  const [titleState, setTitleState] = useState("titulo");

  return (
    <div>
      <Link to="./"> Volver </Link>
      <div className="uploader__container">
        <div className="title__container">
          <h1> Sube tu Video</h1>
        </div>
        <Uploader title={titleState} color={color}></Uploader>
        <label htmlFor="name">Titulo</label>
        <input
          name="name"
          placeholder="titulo del video"
          ref={titleRef}
          onChange={() => {
            setTitleState(titleRef.current.value);
          }}
        ></input>
        <SketchPicker
          color={color}
          onChangeComplete={(color) => {
            setColor(color.hex);
          }}
        ></SketchPicker>
      </div>
    </div>
  );
}
