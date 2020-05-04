import React, { useState } from "react";

import "semantic-styles";

const words = ["apple", "orange", "banana", "grape"];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [completed, setCompleted] = useState("");

  function autoComplete(value) {
    if (completed) {
      setCompleted("");
      setSearchInput("");
    } else {
      setSearchInput(value);
      const match = words.filter((word) => word.includes(searchInput));

      if (match.length === 1) {
        setCompleted(match);
      }
    }
  }

  return (
    <div className="page container padding">
      <div className="card padding">
        <h1 className="card-heading">Fruit Search</h1>
        <input
          type="text"
          class="input"
          value={completed ? completed : searchInput}
          onChange={(e) => {
            autoComplete(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
