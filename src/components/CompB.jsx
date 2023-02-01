import React,{useContext} from 'react'
import { CounterContext } from '../App'

const CompB = () => {
    const data = useContext(CounterContext)
  return (
    <div>
        CompB
        {data.state}
        <button onClick={()=>data.setState(data.state+1)}>Increase</button>
    </div>
  )
}

export default CompB