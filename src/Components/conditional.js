import { useState } from "react"

export default function ConditionIf(){

    const [Login,SetLogin] = useState(true);
    const [userName, SetUserName] = useState('');
    const [number, SetNumber] = useState('');
    const element = <div>{true + 1}</div>;
    return Login ?  <div>
                        <form>  
                            <h3>Login Form</h3>
                            <p>{element}</p>
                            <input type="text" name="name" placeholder="Enter Your Name" value={userName} 
                                    onChange={(e) => SetUserName(e.target.value)} className="form-control w-25 mt-3"/> 
                            <input type="phone" name="number" placeholder="Enter Your Number" 
                                    value={number} onChange={(e)=> SetNumber(e.target.value)} className="form-control w-25 mt-3"/>
                            <button className="btn btn-success form-control w-25 mt-3 mb-3" onClick={(event)=>{
                                if (userName === 'kiruthika' || number === 9659068377){
                                 SetLogin(false); 
                                }else{
                                    alert('please enter correct name and number');
                                    SetLogin(true);
                                    return;
                                }
                                event.preventDefault()}}>Login</button>
                        </form>
                    </div> :
                    <div> 
                        <h2>Welcome</h2>
                        <button className="btn btn-success form-control w-25 mt-3 mb-3" onClick={(event)=>{SetLogin(true); event.preventDefault()}}>Logout</button>
                    </div>
}



 // if (Login) {
    //     return(
    //         <div>
    //             <form>  
    //                 <h3>Login Form</h3>
    //                 <input type="text" name="name" placeholder="Enter Your Name" className="form-control w-25 mt-3"/>
    //                 <input type="phone" name="number" placeholder="Enter Your Number" className="form-control w-25 mt-3"/>

    //                 <button className="btn btn-success form-control w-25 mt-3 mb-3" onClick={(event)=>{SetLogin(false); event.preventDefault()}}>Login</button>
    //             </form>
    //         </div>)
    // }
    // else{
    //     return(
    //         <div>
    //             <h3 className="display-6">Welcome ..!</h3>
    //             <button className="btn btn-success form-control w-25 mt-3 mb-3" onClick={(event)=>{SetLogin(true); event.preventDefault()}}>Logout</button>
    //         </div>
    //     )
    // }