import { useState } from "react";

function Controlled() {

    const [name, setName] = useState("");

    return (
        <div>
            <h1>Controlled Component</h1>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

            <h2>Name: {name}</h2>
        </div>
    );
}

export default Controlled;