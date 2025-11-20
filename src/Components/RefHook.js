import { useRef, useState } from "react";

export default function RefHook(){
    const [name, SetName] = useState();
    const numberRef =useRef();
    // var number; 
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert ( `Thank You ${name}, ${numberRef.current.value}`);

        // number = numberRef.current.value;
        // numberRef.current.value = "This is my number";
        console.log(numberRef.current.value);    
    }

    return(
        <div>
            <h3 className="display-2">This is My reference Class</h3> <hr/>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control w-25" placeholder="Enter Your Name"  onChange={(e) => SetName(e.target.value)} />
                <input type="text" className="form-control w-25 mt-3" placeholder="Enter you number"  ref={numberRef} />
                <button type="submit" className="btn btn-primary mt-3">Save</button>
                {/* <p>{numberRef.current.value}</p>    */}
            </form>
        </div>
    )
}