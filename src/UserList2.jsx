import User from "./User3";

function UserList2() {

    const users = [
        {
            id: 1,
            name: "Iqra",
            age: 20
        },
        {
            id: 2,
            name: "Sehrish",
            age: 22
        },
        {
            id: 3,
            name: "Muskan",
            age: 21
        }
    ];

    return (
        <div>
            <h1>User List</h1>

            {users.map((user) => (
                <User
                    key={user.id}
                    name={user.name}
                    age={user.age}
                />
            ))}
        </div>
    );
}

export default UserList2;