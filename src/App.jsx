import React from 'react'
import useFetch from './useFetch'

const App = () => {
    const [data] = useFetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
  return (
    <>
        <h1>Custom Hook In React Js</h1>
        {
            data.map((elem,index)=>
                <h1 key={index}>{elem.firstName}</h1>
            )
        }
        
    </>
  )
}

export default App