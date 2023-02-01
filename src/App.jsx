import React,{useState, createContext} from "react";
import CompA from "./components/CompA";

const CounterContext = createContext();

const App = () => {
  const [state,setState] = useState(0);

  return (
    <>
    <CounterContext.Provider value={{state,setState}}>
       APP 
       <CompA/>
      {/* <button onClick={()=>setState(state+1)}>Click here to increase</button> */}
    </CounterContext.Provider>
    </>
  )
}

export default App;
export {CounterContext}
