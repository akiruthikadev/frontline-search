import { useState } from "react";

export const Counter = () => {

    // const input = document.getElementById('num').value;
    const [count,setCount] = useState (0);

    // const [count,setCount] = useState();

    const increment = (e) =>{
        e.preventDefault();
        setCount(count+1)
    }

    const decrement =() =>
    {   
        if(count>0)
            setCount(count-1)
    }
    return(
        <div>
        <h1 style={{fontWeight:"bold", color:"gray", textDecorationLine:"underline"}}> This Is My Counter </h1>
        <form>
            <div>
                <button type="button" onClick={increment}>+</button><button>{count}</button><button type="button" onClick={decrement}>-</button>
            </div>
        </form>
        </div> 
    );
}
