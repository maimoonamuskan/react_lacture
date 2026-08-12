import { useEffect, useState } from "react";

function Effect() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Effect;