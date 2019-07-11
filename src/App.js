import React, { useState, useEffect } from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Media from "./Media";
import MediaInfo from "./MediaInfo";
import HDMedia from "./HDMedia";
import Description from "./Description";
import { Grid, Button } from "semantic-ui-react";
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
      <Grid verticalAlign="middle" columns={3}>
        <Grid.Column textAlign="center" color="black" stretched>
          <MediaInfo title={media.title} date={media.date} />
        </Grid.Column>
        <Grid.Column >
          {hd ? (
            <HDMedia media={media.hdurl} />
          ) : (
            <Media media={media.url} type={media.media_type} />
          )}
        </Grid.Column>
        <Grid.Column textAlign="center" color="black">
          <Description desc={media.explanation} />
        </Grid.Column>
      </Grid>
      <Button.Group size="huge">
        <Button onClick={showHD}>HD</Button>
        <Button.Or />
        <Button onClick={showHD}>SD</Button>
      </Button.Group>
      {/* <button onClick={showHD}>
        {hd ? "Standard photo" : "Show HD Photo"}
      </button> */}
    </div>
  );
}

export default App;
