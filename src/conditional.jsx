import { useState } from "react";

function Conditional() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering</h2>

      <button onClick={() => setLogin(!login)}>
        Login / Logout
      </button>

      {login ? (
        <h3>Welcome Muskan</h3>
      ) : (
        <h3>Please Login</h3>
      )}
    </div>
  );
}

export default Conditional;