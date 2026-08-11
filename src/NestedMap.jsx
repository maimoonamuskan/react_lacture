function NestedMap() {

    const students = [
        {
            id: 1,
            name: "Sehrish",
            subjects: ["Math", "English", "Computer"]
        },
        {
            id: 2,
            name: "Muskan",
            subjects: ["React", "JavaScript", "CSS"]
        }
    ];

    return (
        <div>

            <h1>Students</h1>

            {students.map((student) => (

                <div key={student.id}>

                    <h2>{student.name}</h2>

                    {student.subjects.map((subject) => (
                        <p key={subject}>
                            {subject}
                        </p>
                    ))}

                </div>

            ))}

        </div>
    );
}

export default NestedMap;