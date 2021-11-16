import "./App.css";
import React, { useState, useRef } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";
// class Person extends React.Component {

// 불필요한 렌더는 하지않음.
// shouldComponentUpdate(previousProps) {
//   for (const key in this.props) {
//     if (previousProps[key] !== this.props[key]) {
//       return true;
//     }
//   }
//   return false;
// }

// 하지만 넘 번거로우므로 React.Component 대신 PureComponent를 사용하기로 함
// 주의할점으로는 onClick 내에 화살표 함수 등으로 바로 코드를 작성하지않을것.
// _change 와같이 외부로 함수를 뺄것~
// class Person extends React.PureComponent {
//   render() {
//     console.log("person render");
//     const { name, age } = this.props;

//     return (
//       <div>
//         {name} / {age}
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     text: "",
//     persons: [
//       { id: 1, name: "solyi", age: 31 },
//       { id: 2, name: "hanna", age: 27 },
//     ],
//   };
//   render() {
//     const { text, persons } = this.state;
//     return (
//       <div>
//         <input type="text" value={text} onChange={this._change} />
//         <ul>
//           {persons.map((person) => {
//             return (
//               <Person
//                 {...person}
//                 key={person.id}
//                 onClick={this.toPersonClick}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
//   _change = (e) => {
//     this.setState({
//       ...this.state,
//       text: e.target.value,
//     });
//   };

//   toPersonClick = () => {};
// }

// 2) React.createPortal
// function App() {
//   const [visible, setvisible] = useState(false);
//   const open = () => {
//     setvisible(true);
//   };
//   const close = () => {
//     setvisible(false);
//   };
//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vW",
//               height: "100vh",
//               background: "rgba(0,0,0,0.5",
//             }}
//             onClick={close}
//           >
//             Hello?
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

// 3) React.forwardRef
function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };
  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}
export default App;
