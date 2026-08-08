function UserProps(props) {
  return (
    <div>
      <h2>Props </h2>

      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default UserProps;