export default function EventHandle(){

    const  handleSubmit = (e) => {
        e.preventDefault();
        alert('Second form Submitted successfully');

    }   
    
    return(
        <div onClick={()=>{alert('parent node is activated')}}>
            <h1 className="display-6 fw-bold" >Event Handling and Propagation</h1>
            <hr/>   
            <form>  
                <h3>Login Form</h3>
                <input type="text" name="name" placeholder="Enter Your Name"  className="form-control w-25 mt-3"/>
                <input type="phone" name="number" placeholder="Enter Your Number" className="form-control w-25 mt-3"/>
                <button className="btn btn-success form-control w-25 mt-3 mb-3" onClick={(event)=>{alert('Data Saved Successfully');event.preventDefault()}}>save</button>
            </form>
             <form onSubmit={handleSubmit}>  
                <h3>Second Form</h3>
                <input type="text" name="name" placeholder="Enter Your Name" className="form-control w-25 mt-3"/>
                <input type="phone" name="number" placeholder="Enter Your Number" className="form-control w-25 mt-3"/>
                <button type="submit" className="btn btn-success form-control w-25 mt-3 mb-3">save</button>
            </form>
        </div>
    )
}