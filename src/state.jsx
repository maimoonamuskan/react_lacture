import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Example</h2>

      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default State;