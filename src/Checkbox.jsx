import { useState } from "react";

function Checkbox() {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <h1>Checkbox Practice</h1>

            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />

            <p>
                {isChecked ? "Checkbox is Checked" : "Checkbox is Not Checked"}
            </p>
        </div>
    );
}

export default Checkbox;