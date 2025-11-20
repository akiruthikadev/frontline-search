import car from '../Assets/Images/carss.jpg';
import bike from './../Assets/Images/bike.jpg';
import auto from '../Assets/Images/auto.jpg';
import mobile from '../Assets/Images/mobb.jpg';
import { useState } from 'react';

export default function SearchTask(){
    
    const image = [
        {id:1 , name: "car", title:"vechile", image: car},
        {id:2 , name: "bike", title:"vechile", image: bike},
        {id:3 , name: "auto", title:"vechile", image: auto},
        {id:4 , name: "mobile", title:"electronics", image: mobile}
    ]
    const[searchName, setSearchName] = useState("")

    const filter = image.filter((p)=>{
            const search = p.name.toLowerCase().includes(searchName.toLowerCase());
            return search;
    })

    return(
        <div className='text-center'>
            <h3 className=' mt-3 mb-3'>Search Task</h3>
            <input 
                    type="search" 
                    className='form-control w-50 text-center rounded-pill' 
                    style={{height:50}}
                    placeholder='Search Here'
                    value={searchName}
                    onChange={ e =>setSearchName(e.target.value)}/>
            <button type='submit' className='btn btn-success mt-3 mb-3'> Search</button>

            <div className='d-flex justify-content-center'>
                   <ul>
                    {
                       filter.length>0 ? (
                            
                        filter.map((info)=>
                        <li key={info.id}>
                            <span className='h5 fw-bold'>  {info.name}</span> 
                            <img src={info.image} alt="" />
                            {info.title}
                             </li>)
                    
                        ) :(
                            <li>no data.</li>
                        ) 
                    }
                   </ul>
            </div>

        </div>
    )
}

