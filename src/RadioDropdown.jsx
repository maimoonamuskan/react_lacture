import { useState } from "react";
function RadioDropdown() {
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    return (
        <div>
            <h1>Radio Buttons</h1>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                />
                Male
            </label>

            <br />

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                />
                Female
            </label>

            <br />

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={(e) => setGender(e.target.value)}
                />
                Other
            </label>

            <h3>Gender: {gender}</h3>


            <h1>Dropdown</h1>

            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option value="">Select City</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Islamabad">Peshawar</option>
            </select>
            <h3>City: {city}</h3>
        </div>
    );
}

export default RadioDropdown;