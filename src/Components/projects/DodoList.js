import { useState } from "react"

export default function ToDoList(){

    const [input,setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const add = () => {
        if(input.trim()){
        setTasks(prev => [...prev,input.trim()]);
        setInput('');
        }
    }
    const finishTask = (idx) => {
        setTasks(prev => prev.filter((_, index) => index !== idx));
        };

    return(
        <div className="border-5 w-50"> 
            <h2 className="display-6 fw-bold text-decoration-underline text-center">My First React Project</h2>
            <h5 className="fw-bold text-center">ToDo List</h5>
            <hr/>
            <input type="text" className="form-control" placeholder="add tasks" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit" className="btn btn-success mt-3 w-25" onClick={add}>Add</button>
                <ul> {tasks.map((view, index) =>(
                    <li  className="mb-3 mt-3 border-3 form-control" key={index}> Task{index+1}  : {view}
                    <button className="btn btn-success ms-3 me-3" type="submit">Edit</button>
                    <button className="btn btn-danger" type="button" onClick={()=> finishTask(index)}>Delete</button>
                    </li>
                    ))}
                </ul>
        </div>
    )
}