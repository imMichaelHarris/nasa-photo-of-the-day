import React, { useState, useEffect } from "react";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import Media from "./Media";
import MediaInfo from "./MediaInfo";
import HDMedia from "./HDMedia";
import Description from "./Description";
function App() {
  const [media, setMedia] = useState([]);
  const [hd, setHD] = useState(false);

  const getAPOD = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=fa5O3BQljsEyqfNarlgF5bX4t4TbK6vLbySh9i7H&"
      )
      .then(res => {
        console.log(res);
        setMedia(res.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => getAPOD(), []);

  const showHD = () => setHD(!hd);
  

  return (
    <div className="App">
      
        <button onClick={showHD}>{hd ? "Standard photo" : "Show HD Photo" }</button>
        <MediaInfo title={media.title} date={media.date} />
        {hd ? <HDMedia media={media.hdurl}/> : <Media media={media.url} type={media.media_type}/> }
        <Description desc={media.explanation}/>
    </div>
  );
}

export default App;
