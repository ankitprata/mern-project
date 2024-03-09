import React, { useReducer, useState } from "react";

const reducer = (state, action) => {

};
const App = () => {
    // const [count,setCount]=useState(0);


    const [state, dispatch] = useReducer(reducer,
        { count: 0 });
    //reducer function
    // it is pure function
    // state (coffe powder) and action (water)
    // new sate (coffe)


    //  pure function
    // 10+10=20
    // no side effect

    const handleClick = () => {
        dispatch({type:"incr"});
    }
    const handleClick1 = () => {
        dispatch({type:"incr"});
    }
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick1}>-</button>
        </div>
    )
}
export default App;
