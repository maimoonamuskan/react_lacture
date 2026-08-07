import todoImage from "./assets/todo.png";

function Todo() {
  function callFun(){
            alert("Function Called!");
        }
  return (
    <div>
      <h2>My Cat</h2>

      <img
        src={todoImage}
        alt="Todo"
        width="250"
      />

      <ul>
        <li>My cute cat</li>
        <li>Its me Maimoona Muskan </li>
        <li>BSCS Student </li>
        <li>Learning React.js</li>
        <li>Happy to make amazing Projects</li>
      </ul>
      <button onClick={callFun}>Click Me</button>
    </div>
  );
}

export default Todo;