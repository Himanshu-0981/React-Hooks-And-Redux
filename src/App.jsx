import React,{useReducer} from "react";

const reducer = (state,action) => {
    if(action.type==="INC"){
        return state+2
    }else if(action.type==="DEC"){
        return state-2;
    }else if(action.type==="MUL"){
        return state*2
    }
    return state;
}

let initialState = 0;

const App = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <>
            <h1>USE REDUCER</h1>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:'INC'})}>Increment</button>
            <button onClick={()=>{dispatch({type:'DEC'})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:'MUL'})}}>Multiplication</button>
        </>
    )
}

export default App;