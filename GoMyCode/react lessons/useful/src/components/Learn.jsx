// import PropTypes from "prop-types"; 
// import React,{useState, useEffect,useRef,useReducer} from "react"
// const Learn = ({name,age}) => {
//     return `in 5 years ${name} will be ${age +5 }`
// };
// Learn.propTypes={
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,

// }

//useState
// const Learn = () => {
// declaring the state hooks
  // const [name, setName] = useState("ilyes");
// here we use the setter to change the content of the name state
//  const handleClick = () =>{
//      setName("nabi")
//  }
//   return (
//     <div>
//       <p>welcome {name}</p>
//       <button onClick={handleClick}>afficher le prénom</button>
//     </div>
//   );
// };

//useEffect
// const Learn = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `you clicked ${count}`;
//   });

//   return (
//     <div>
//       <p>count that number of clicks is you page title :{count}</p>
//       <button onClick={() => {setCount(count + 1); }} >
//         click here
//       </button>
//     </div>
//   );
// };

// const Learn = () =>{
//     const [name,setName]=useState("")
// // we declare the input inside the variable
//     const nameRaf =useRef()
// // we are referring to input to change the value
//     const handleChange = () => {
//       setName(nameRaf.current.value);
//     };


//    return(
//        <div>
//            <p> {name} </p>
//            <input type="text" placeholder="entre votre nom" ref={nameRaf}/>
//            <button onClick={handleChange}>submit</button>
//        </div>
//    )
// }
// use reducer hook : useReducer  is user to manage state in react
// const [state,dispatch]=useReducer(initialState,reducer)
// reducer :it's a function that contains the logic 
// dispatch : it's a method that dispatch the action to the reducer


//useReducer
// const initialState = {
//   count: 0
// }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       if (state.count <= 0) {
//         return state;
//       }
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// };
// function Learn() {

//     const [state, dispatch] = useReducer(reducer,initialState);
//     return (
//     <div>
//         <h1>{state.count}</h1>
//         <button onClick={() => { dispatch({ type: "increment" }) }} >+</button>
//         <button onClick={() => { dispatch({ type: "decrement" }) }} >-</button>
//         <button onClick={() => { dispatch({ type: "reset" }) }} >Reset</button>
//     </div>
//     );
// }
// export default Learn;
