import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Media from './Media'
import MediaInfo from "./MediaInfo";
function App() {
  const [media, setMedia] = useState([]);

  const getAPOD = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=fa5O3BQljsEyqfNarlgF5bX4t4TbK6vLbySh9i7H&date=2012-03-14"
      )
      .then(res => {
        console.log(res);
        setMedia(res.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => getAPOD(), []);
  console.log(media)
  return (
    <div className="App">
      <p>
        <button>Get Photo</button>
        <MediaInfo title={media.title} date={media.date}/>
        <Media media={media.url}/>

      </p>
    </div>
  );
}

export default App;
