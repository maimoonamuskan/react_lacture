import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>onChange Example</h2>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default OnChange;