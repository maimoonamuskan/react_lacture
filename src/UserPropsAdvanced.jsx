function UserPropsAdvanced(props) {
  return (
    <div>
      <h2>Props</h2>

      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>

      <h3>Skills:</h3>
      <p>{props.skills[0]}</p>
      <p>{props.skills[1]}</p>
      <p>{props.skills[2]}</p>
    </div>
  );
}

export default UserPropsAdvanced;