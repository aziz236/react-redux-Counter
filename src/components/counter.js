import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import {Increment,Descrement} from '../components/actions/Actions'

function Counter() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(Increment())}>+</button>
      <h className="number"> {count} </h>
      <button onClick={() => dispatch(Descrement())}>-</button>
    </div>
  );
}
export default Counter;