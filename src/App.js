import { useState } from 'react';
import './App.css';

import Video from './components/Video'

function App() {
  const [videoList, setvideoList] = useState([])

  return (
    <div className="App">
      {/* {videoList.map(video => {
        return (video)
      })} */}
      <Video id='vuw0ay27tr'></Video>
      <Video id='vuw0ay27tr'></Video>
      <Video id='vuw0ay27tr'></Video>
      <Video id='vuw0ay27tr'></Video>
      <Video id='vuw0ay27tr'></Video>
      <Video id='vuw0ay27tr'></Video>
      <Video id='vuw0ay27tr'></Video>

    </div>
  );
}

export default App;
