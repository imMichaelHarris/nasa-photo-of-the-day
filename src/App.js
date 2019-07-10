import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Photo from "./Photo";

function App() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=fa5O3BQljsEyqfNarlgF5bX4t4TbK6vLbySh9i7H"
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <p>
        <button>Get Photo</button>
        <Photo />
      </p>
    </div>
  );
}

export default App;
