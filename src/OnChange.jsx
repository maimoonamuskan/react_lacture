function OnChange() {

    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div>
            <h2>onChange Event</h2>

            <input
                type="text"
                onChange={handleChange}
                placeholder="Enter your name"
            />
        </div>
    );
}

export default OnChange;