import React,{useState,useEffect} from "react"

const useFetch = url => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const getData = async() => {
            const req = await fetch(url);
            const res = await req.json();
            setData(res)
        }
        getData()
    },[])
    return [data]
}

export default useFetch