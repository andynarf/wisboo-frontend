import { useState } from "react";
import "./App.css";

import Video from "./components/Video";

function App() {
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
      <div className='title__container'>
        <h1> Libreria de videos</h1>
      </div>
      <div className="videos__container">
        {videoList.map((video) => {
          return <Video id={video}></Video>;
        })}
      </div>
    </div>
  );
}

export default App;
