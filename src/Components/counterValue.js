import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Counts, decrement, increment, incrementByAmount } from "./slice";


export default function CounterValue(){
    const value = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    return(
        <div>
            <h4> Count : {value}</h4>
            <button onClick= { () => dispatch(increment())}>Increment</button>
            <button onClick= { () => dispatch(decrement())}>decrement</button>
            <button onClick= { () => dispatch(incrementByAmount(5))}>Increment By Value</button>
            <button onClick= { () => dispatch(Counts(100))}>Count+100</button>
        </div>
    )
}                                                                                             