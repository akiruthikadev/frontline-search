import {  useEffect, useState} from 'react';
import axios from "axios";
import image from './../Assets/Images/goog.png';
// import { FiSearch } from 'react-icons/fi';
export default function SearchBox(){
    const[posts,setPosts] = useState([]);
    const[searchName, setSearchName] = useState("");

    useEffect(()=>{ 
        const dataFetching = async ()=>{
                try {
                    const response = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=6",{
                         headers: {
                        "content-type": "application/json",
                        }
                    });
                    setPosts(response.data);
                    console.log(response.data);
                } catch (error) {
                    
                }
        }
        dataFetching();
    },[]);

    const filter = posts.filter((p)=>{
            const search = p.name.toLowerCase().includes(searchName.toLowerCase());
            return search;
    })
    return (
        <div>
            <div className='mt-5 text-center position-relative'>
                <img src={image} alt="" style={{width:300}} />
            </div>
            <div className=' d-flex justify-content-center'>
                <input 
                    type="search" 
                    className='form-control w-50 text-center rounded-pill' 
                    style={{height:50}}
                    placeholder='Search the Web'
                    value={searchName}
                    onChange={ e =>setSearchName(e.target.value)}/>
            </div>
            <div>
                {/* <ul>
                    {
                        filter.length>0 ? (
                            
                        filter.map((info)=>
                        <li key={info.id}>
                            <span className='h5 fw-bold'> Name: {info.name}</span> 
                            <span className=' text-danger'> Email:{info.email}</span>
                            <span className='text-primary'> Address: {info.address.city}</span>
                            <button className='btn btn-success'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                             </li>)
                    
                        ) :(
                            <li>no products found.</li>
                        )
                    }
                </ul> */}
                <table className=' table-bordered table-secondary table-hover table-striped mt-5 mx-auto'>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                        {
                            filter.length>0 ? (
                                filter.map((info)=>
                                <tr key="info.id">
                                    <th>{info.id}</th>
                                    <th>{info.name}</th>
                                    <th>{info.email}</th>
                                    <th>{info.address.city}</th>
                                </tr>)
                            ) : (
                                <p>No Data</p>
                            )
                        }
                    
                </table>
            </div>
        </div>
    )
}