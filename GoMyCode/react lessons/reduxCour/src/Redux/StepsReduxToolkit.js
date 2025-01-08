//  Steps for redux toolkit 
// useSelector, useDispatch
// 1.Setup : npm install @reduxjs/toolkit react-redux
// 2.configure Store : store.js
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {},
});


// 4. index.js
import { Provider } from 'react-redux';
import { store } from './app/store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// 5. Slices/slice.js : Create a state slice


import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: state => {
        state.value += 1;
      },
      decrement: state => {
        state.value -= 1;
      },
    },
  });
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;



// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


// Finally, we can use the Redux state and actions in our application.
//  To do so, we will need the useSelector and useDispatch hooks from react-redux.

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './app/slices/counterSlice';


function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    
    return (
      <div className="App">
        <div>{count}</div>
        <div>
          <button onClick={() => dispatch(decrement())}>- 1</button>
          <button onClick={() => dispatch(increment())}>+ 1</button>
        </div>
      </div>
    );
  }
export default Counter