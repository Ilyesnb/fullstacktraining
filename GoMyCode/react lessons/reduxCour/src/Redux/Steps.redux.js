// Redux 
//  1.install redux : npm i redux react-redux 
// 2. store.js :
// create redux store :  => 
import { createStore } from 'redux';
import reducer from './reducers';
createStore(reducer, initialState)
// 3. Actions.js : "Increment" , "Decrement" , "Reset"
const Increment = 'Increment';
const Decrement = 'Decrement';
const Reset = 'Reset';
export default {Increment, Decrement, Reset};
// 4. reducers.js : toDoReducer => reducer function ==> Switch case
const counterReducer = (state = [], action) => {
    switch (action.type) {
       case "Inrement":
            return state + 1;
        case "Decrement":
            return state - 1;
            case 'Reset':
                return 0;
        default:
            return state;
    }
};
export default counterReducer;

// 5. index.js : 
// import { Provider } from 'react-redux';
// import { store } from './app/store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// Counter.js :
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';
function Counter (props){
    const [count, setCount] = useState(props.count);
    const increment = () => {
        props.dispatch({
            type: 'Increment'
        })
    }
    const decrement = () => {
        props.dispatch({
            type: 'Decrement'
        })
    }
    const reset = () => {
        props.dispatch({
            type: 'Reset'
        })
    }

    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

//  connect Counter to redux 
export default connect(mapStateToProps)(Counter);
