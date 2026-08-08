import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Toggle Example</h2>

      <button onClick={() => setShow(!show)}>
        Show / Hide
      </button>

      {show && <h3>Hello Muskan</h3>}
    </div>
  );
}

export default Toggle;