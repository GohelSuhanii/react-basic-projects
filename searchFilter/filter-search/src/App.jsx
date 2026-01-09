import { useState } from "react";

import "./App.css";

function App() {
  const items = [
    "Apple",
    "Banana",
    "Guava",
    "Orange",
    "Pineapple",
    "Watermelon",
  ];
  const [search, setSearch] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
