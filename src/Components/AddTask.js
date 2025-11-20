import { useState } from "react"

export default function AddTask(){
    const[inputValue , setInputValue] = useState('');
    const[addItems, setAddItems] =useState([]);
    const[count,setCount] =useState(0);

    const handleSubmit = (e) => { 
            e.preventDefault();
            setAddItems(prevItems => [
                            ...prevItems, inputValue ]);
            setInputValue('');
    }
   
    return(
        <div>
            <form className=" bg-primary" onSubmit={handleSubmit}>
                <h2 className="text text-center text-white">Shopping List</h2>
                <input type="text" className="form-control w-25 mt-3 mb-3"
                value={inputValue} onChange={e=> setInputValue(e.target.value)}
                />
                <button type="submit" className="btn btn-secondary mb-3">Add Items</button>
                <p>{inputValue}</p>
                <ul>
                    {
                        addItems.map((i, idx)=>(
                           <li key={idx}> {i} <button type='submit' onChange={()=> setCount(count+1)}>+ </button>{count} <button type='submit' onChange={()=> setCount(count-1)}> -</button> </li>     
                        ))
                    }
                </ul>
            </form>
        </div>
    )
}