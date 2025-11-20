import { useEffect, useLayoutEffect, useState } from "react"

export default function CounterEffective(){
    
    const [width,setWidth] = useState(0);
    const [count,setCount] = useState(typeof window.innerWidth !== "undefined" ? window.innerWidth : 0 );

    useEffect(()=>{
        document.title =   `Count : ${count}`
    })
    useLayoutEffect(()=>{
        const handleResize = () =>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleResize)

        // return()=>{
        //      window.removeEventListener("resize",handleResize)
        // }
    })

    const handleSubmit = (e) =>{
            e.preventDefault();
            setCount(count+1);
    }
    
    
    
    return(
        <div>
            <form className="form-control" onSubmit={handleSubmit}>
                <h3 className="display-6 fw-bold text-center text-success text-decoration-underline">This Is My Effective Class</h3>
                {/* <input type="text" /> */}
                <p className="text-center">Count -{count}</p>
                <button type="submit" className="btn btn-outline-success">Count</button>
                <p>Current Width:{width}</p>
            </form>
        </div>
    )
}