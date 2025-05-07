import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StartRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={10}
        color="green"
        onSetMovieRating={setMovieRating}
      />
      <p>The movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      onSetMovieRating={() => {}}
    />
    <StarRating
      maxRating={"dasds"}
      size={24}
      color="blue"
      className="test"
      defaultRating={3}
      onSetMovieRating={() => {}}
    />
    <Test />
  </React.StrictMode>
);
