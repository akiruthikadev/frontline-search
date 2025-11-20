import { Component } from "react";


const para = {
    textAlign:'center',
    color:"orange"
}
class MyClass extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Pranav' , age: 3
        }
    }
    render(){
        return(
            <div>
            <h3 style={{ fontSize: '2rem', color: 'blue' , textAlign:"center"}}>This Is My Class Function</h3>
            <p style={para}>Hi {this.state.name} Your age is :{this.state.age}</p>
           </div>
        );
    }
}

export default MyClass;