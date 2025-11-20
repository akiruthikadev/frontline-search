// import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

const InitialState ={
    count : 0
}

const CountReducer = (state , action )=>{
    switch (action.type) {
        case "Increment":
            return {
                count : state.count + 1
            }
        case "Decrement":
            return {
                count : state.count - 1
            }
        default:
            return state;
    }
}

export default function CounterReducer(){

    const [state, dispatch] = useReducer(CountReducer, InitialState);
    return(
        <div>
            <h3>This is My Reducer</h3>
            <p> Count : {state.count}</p>
            <button className="btn btn-success" onClick={()=>{dispatch({ type: "Increment" })}}>Count Me</button>
            <button className="btn btn-success" onClick={()=> {dispatch({ type: "Decrement"})}}>Decount </button>
        </div>
    )
}