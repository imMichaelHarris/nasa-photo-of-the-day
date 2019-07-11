import React, { useState, useEffect } from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Media from "./Media";
import MediaInfo from "./MediaInfo";
import HDMedia from "./HDMedia";
import Description from "./Description";
import { Grid } from "semantic-ui-react";
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
    <Grid verticalAlign="middle" centered columns={3} className="App">
      <Grid.Column textAlign="center">
        <MediaInfo title={media.title} date={media.date} />
      </Grid.Column>
      {/* <button onClick={showHD}>{hd ? "Standard photo" : "Show HD Photo" }</button> */}
      <Grid.Column>
        {hd ? (
          <HDMedia media={media.hdurl} />
        ) : (
          <Media media={media.url} type={media.media_type} />
        )}
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Description desc={media.explanation} />
      </Grid.Column>
    </Grid>
  );
}

export default App;
