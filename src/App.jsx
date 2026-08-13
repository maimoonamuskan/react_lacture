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



// function App() {

//   function callFun() {
//     alert("Function Called");
//   }
// //   const fruit = ()=> {
// // alert("Apple");
// //   }
// const fruit = (name) => {
//     alert(name);
//   }
//   return(
//     <div>
//       <h1>Event and Function Call</h1>
//       <button onClick={()=>fruit("Apple")}> Apple</button>
//       <button onClick={()=>fruit("Banana")}> Banana</button>
//     </div>
//   );
// }

// export default App;



///state

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>State Example</h1>

//       <h2>{count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button>
//     </div>
//   );
// }

// export default App;


//toogle=>state change hide and show
// import { useState } from "react";

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <h1>Toggle Example</h1>

//       <button onClick={() => setShow(!show)}>
//         Show / Hide
//       </button>

//       {show && <h2>Hello Muskan</h2>}
//     </div>
//   );
// }

// export default App;

// import State from "./State";

// function App() {
//   return (
//     <div>
//       <h1>React State Example</h1>

//       <State />
//     </div>
//   );
// }

// export default App;



// import State from "./State";
// import Toggle from "./Toggle";

// function App() {
//   return (
//     <div>
//       <h1>React Practice</h1>

//       <State />

//       <hr />

//       <Toggle />
//     </div>
//   );
// }

// export default App;



// import State from "./State";
// import Toggle from "./Toggle";
// import Conditional from "./Conditional";

// function App() {
//   return (
//     <div>
//       <h1>React Practice</h1>

//       <State />

//       <hr />

//       <Toggle />

//       <hr />

//       <Conditional />
//     </div>
//   );
// }

// export default App;


// import State from "./State";
// import Toggle from "./Toggle";
// import Conditional from "./Conditional";
// import User from "./UserProps";

// function App() {
//   return (
//     <div>
//       <h1>React Practice</h1>

//       <State />

//       <hr />

//       <Toggle />

//       <hr />

//       <Conditional />

//       <hr />

//       <User
//         name="Muskan Khan"
//         age={21}
//         email="maimoonamuskan89@gmail.com"
//       />
//     </div>
//   );
// }

// export default App;

// import State from "./State";
// import Toggle from "./Toggle";
// import Conditional from "./Conditional";
// import UserProps from "./UserProps";
// import UserPropsAdvanced from "./UserPropsAdvanced";

// function App() {
//   return (
//     <div>
//       <h1>React Practice</h1>

//       <State />

//       <hr />

//       <Toggle />

//       <hr />

//       <Conditional />

//       <hr />

//       <UserProps
//         name="Muskan Khan"
//         age={21}
//         email="maimoonamuskan89@gmail.com"
//       />

//       <hr />

//       <UserPropsAdvanced
//         name="Muskan Khan"
//         age={21}
//         skills={["HTML", "CSS", "React"]}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {

//     const [val, setVal] = useState("");

//     return (
//         <div>

//             <h1>Get Input field Value</h1>

//             <input
//                 type="text"
//                 value={val}
//                 onChange={(event) => setVal(event.target.value)}
//                 placeholder="Enter your name"
//             />

//             <h1>{val}</h1>

//             <button onClick={() => setVal("")}>
//                 Clear Value
//             </button>

//         </div>
//     );
// }

// export default App;

// import Controlled from "./Controlled";

// function App() {

//     return (
//         <div>
//             <Controlled />
//         </div>
//     );
// }

// export default App;

// import Checkbox from "./Checkbox";

// function App() {

//     return (
//         <div>
//             <Checkbox />
//         </div>
//     );
// }

// export default App;


// import RadioDropdown from "./RadioDropdown";

// function App() {
//     return (
//         <RadioDropdown />
//     );
// }

// export default App;

// import Map from "./Map";

// function App() {
//     return (
//         <Map />
//     );
// }

// export default App;


// import User from "./User3";

// function App() {
//     return (
//         <div>
//             <h1>User Information</h1>
//             <User name="Iqra" age={20} />
//             <User name="Sehrish" age={22} />
//             <User name="Muskan" age={21} />
//         </div>
//     );
// }

// export default App;

// import UserList2 from "./UserList2";

// function App() {
//     return (
//         <UserList2 />
//     );
// }

// export default App;


// import NestedMap from "./NestedMap";
// import Product from "./Product";

// function App() {
//     return (
//         <>
//             <NestedMap />
//             <Product />
//         </>
//     );
// }

// export default App;

// import ProductList from "./productList";

// function App() {
//     return (
//         <ProductList />
//     );
// }

// export default App;


// import Effect from "./Effect";

// function App() {
//   return (
//     <div>
//       <h1>useEffect Example</h1>

//       <Effect />
//     </div>
//   );
// }

// export default App;


// import Button from "./Button";

// function App() {
//   return <Button />;
// }

// export default App;
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React Counter App</h1>

      <Counter />
    </div>
  );
}

export default App;