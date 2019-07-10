import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Photo from "./Photo";

function App() {
  const [photo, setPhoto] = useState([]);
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
