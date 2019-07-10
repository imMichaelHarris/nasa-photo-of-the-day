import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState([]);
  return (
    <div className="App">
      <p>
        <button>Get Photo</button>
      </p>
    </div>
  );
}

export default App;
