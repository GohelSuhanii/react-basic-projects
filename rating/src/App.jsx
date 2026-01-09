import { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Rating Us!</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
      <p>Rating : {rating} / out of 5</p>
    </div>
  );
}

export default App;
