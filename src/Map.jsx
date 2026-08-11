function Map() {

    const names = ["Iqra", "Sehrish", "Muskan"];

    return (
        <div>
            <h1>Users</h1>

            {names.map((name) => (
                <h2 key={name}>{name}</h2>
            ))}
        </div>
    );
}

export default Map;