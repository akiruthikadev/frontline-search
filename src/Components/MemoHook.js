import { useEffect, useState } from "react"


export default function Counter(){
    const [count,setCount] =useState(0) 
    
    const decrement = () =>{
        if (count>0) return setCount(count-1)
    }
    const double = (num) => {
         return num * 2;
    }
    useEffect(()=>
    {
        document.title = `My Dream ${count}`;
    })
    
    
    return(
        <div>
            <h3 className="display-5 fw-bold text-decoration-underline text-center mt-3 mb-3">This is My hook Class</h3>
            <p>Count : {count}</p>
            <p>Double :{memo}</p>
            <button onClick={()=>setCount(count+1)} className="btn btn-danger"> Click to increase</button>
            <button className="btn btn-danger ms-3" onClick={decrement}>Click to Decrease</button>  
        </div>
    )
}