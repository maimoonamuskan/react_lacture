// import Header from "./assets/header";

// function App() {
//   return (
//     <>
//       <Header />
//     </>
//   );
// }

// export default App;

///second program
// import Hello from "./Hello";

// function App() {
//   return (
//     <>
//       <Hello />
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// import User from "./User";

// function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <>
//       <h1>Counter Val: {counter}</h1>

//       <User />

//       <button onClick={() => setCounter(counter + 1)}>
//         Increase Counter Val
//       </button>
//     </>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div>
//       <h1>First Component</h1>

//       <Fruit />
//       <Colors />
//     </div>
//   );
// }

// function Fruit() {
//   return (
//     <h1>Apple</h1>
//   );
// }

// function Colors() {
//   return (
//     <h1>Red Color</h1>
//   );
// }

// export default App;


// import UserComponent from "./UserComponent";

// function App() {
//   return (
//     <div>
//       <h1>Welcome to React</h1>
//       <UserComponent />
//     </div>
//   );
// }
// export default App;



// import UserComponent from "./UserComponent";
// import UserInfo from "./UserInfo";

// function App() {
//   return (
//     <div>
//       <h1>Welcome to React</h1>

//       <UserComponent />

//       <UserInfo />
//     </div>
//   );
// }

// export default App;



// import Math from "./Math";

// function App() {
//   return (
//     <div>
//       <h1>React Math Operations</h1>
//       <Math />
//     </div>
//   );
// }

// export default App;


// import Todo from "./Todo";

// function App() {
//   return (
//     <div>
//       <Todo />
//     </div>
//   );
// }

// export default App;



// function App() {
//   const name = "Muskan";

//   const userObj = {
//     name: "queen",
//     email: "maimoonamuskan89@gmail.com",
//     age: 21,
//   };

//   const userArray = [
//     "Muskan Khan",
//     "maimoonamuskan89@gmail.com",
//     21,
//   ];

//   let x = 30;
//   let y = 20;
//   let path =
//     "https://static.vecteezy.com/system/resources/thumbnails/060/117/855/small/red-rose-is-the-main-focus-of-the-image-with-a-blue-background-and-a-few-other-flowers-in-the-background-the-rose-is-the-most-prominent-and-beautiful-flower-in-the-picture-photo.jpeg";

//   function fruit() {
//     return "Apple";
//   }

//   function sum(a, b) {
//     return a + b;
//   }

//   function operation(a, b, op) {
//     if (op === "+") {
//       return a + b;
//     } else if (op === "-") {
//       return a - b;
//     } else if (op === "*") {
//       return a * b;
//     }
//   }

//   return (
//     <div>
//       <h1>JSX with Curly Braces</h1>
//       <h2>{name}</h2>
//       <h2>{x + y}</h2>
//       <h2>{fruit()}</h2>
//       <h2>{sum(10, 100)}</h2>
//       <h2>{operation(10, 20, "+")}</h2>
//       <h2>{userObj.email}</h2>
//       <h2>{userArray[0]}</h2>
//       <input type="text" value={name}/>
//       <br></br>
//       <img src={path} alt="Red Rose" width="300" /> 
//     </div>
//   );
// }

// export default App;



function App() {

  function callFun() {
    alert("Function Called");
  }
//   const fruit = ()=> {
// alert("Apple");
//   }
const fruit = (name) => {
    alert(name);
  }
  return(
    <div>
      <h1>Event and Function Call</h1>
      <button onClick={()=>fruit("Apple")}> Apple</button>
      <button onClick={()=>fruit("Banana")}> Banana</button>
    </div>
  );
}

export default App;