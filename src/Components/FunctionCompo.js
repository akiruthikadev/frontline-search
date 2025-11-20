const name ='A- Kiruthika';
const message ='Hi';
const para = {
    textAlign:'center',
    color:"purple"
}
function MyFunction(){
    return(
        <div>
            <h1 style={{textAlign:"center", color: "green"}}>Hello World</h1>
            <p style={para}>{message}.{name}</p>
        </div>
    );
}
export default MyFunction;  