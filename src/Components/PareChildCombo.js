export default function ParantCompo(){
    return(
        <div>
            {
                <ChildCompo />
        // <ChildCompo note= "welcome" names= "Kiruthika"/> this is called argument passing
        }
        </div>
    );
}

function ChildCompo({note = "wel" , names = 'sanjai'}){ // this is default parameter (arugument passing we used props)
    return(
        <div>
            <h1>Hello World {note}</h1>     
            {/* in this case we use props.note and props .names  */}
            <p>This Is My Parent Child Components {names}</p>
        </div>
    );
}