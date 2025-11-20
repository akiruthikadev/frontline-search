import car1 from "./../Assets/Images/car.jpg";
import car2 from "./../Assets/Images/cars.jpg";
import car3 from "./../Assets/Images/C3.jpg";
import car4 from "./../Assets/Images/C4.jpg";
import { useState } from "react";

export default function ParentComponents(){
    // const cars = [ car1 , car2 ,car3, car4];
    const head = "MY CAR";
    // const [cars, setCars] = useState([car1 , car2 ,car3, car4]);
    const [carDetails, setCarDetails] = useState([{id:'1', carName: 'BMW', carColor: "red", photo: car1 },
                        {id:'2', carName: 'Audi', carColor: "white", photo: car2},
                        {id:'3', carName: 'Bence', carColor: "black", photo: car3 },
                        {id:'4', carName: 'Toyoto', carColor: "gray", photo: car4 },
    ])
    return(
        <ChildComponents  head={head}  carDetails ={carDetails} set={setCarDetails}/>
    );
}


function ChildComponents({ head, carDetails, children}){
    return(
        <div>  
            <h1>Using Props to Make Reusable Components</h1>
            {/* list */}
            {/* <ul>
                    {cars.map((car, index) => (
                        <li key={index}>
                             <img src={car} alt={`Car ${index + 1}`} style={{ width: "200px" }} />
                        </li>
                    ))}
            </ul> */}
            {/* div */}
            {/* {cars.map((car, index) => (
                <div key={index}><img src={car} alt={`Car ${index + 1}`} style={{ width: "200px" }} /> </div> 
            ))} */}
            {/* cols */}
            <table border={2} style={{textAlign:"center", margin: "auto"}}>
                <tr>
                    {carDetails.map((view) => (
                        <td key={view.id}>
                            <img src={view.photo} alt="" style={{ width: "200px" }} />
                            <h2 style={{color:'black'}}>{head}</h2>
                            <p>{view.carName}</p>
                            <p>{view.carName} is {view.carColor}</p>
                            <p>
                             Children :{children || 'My car'}</p>
                        </td>
                    ))}
                </tr>
            </table>
        </div>
    )
}
