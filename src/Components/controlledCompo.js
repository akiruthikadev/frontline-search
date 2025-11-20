import { Link, useNavigate } from 'react-router-dom';
import image from './../Assets/Images/nature.jpg';
import { useState } from 'react';

const background = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height : 600
        }

export default function ControllComponent(){
   
    const [formData,setFormData] = useState({ name : "", email : "" });
    const [errors,setErrors] = useState({ name :"", email: "" });
    const navigate = useNavigate();
    const validate = () => {
                let newErrors = {}
                 
                if (!formData.name.trim()) {
                    newErrors.name ="Name is Required"
                }

                if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
                }
                return newErrors;
            }
    const handleChange = (event) => {
                const { name , value} = event.target;
                setFormData((formData)=>({ ...formData, [name] : value }))
                setErrors((errors)=>({ ...errors, [name] : "" })) 
            }
    const handleSubmit= (e) =>{
                e.preventDefault();
                const validateErrors = validate();
                if (Object.keys(validateErrors).length === 0) {
                    if( formData.name === 'kiruthika' && formData.email === 'kiruthika@gmail.com'){
                        alert('Thank you!');
                        // setFormData({ name: '', email: '' });
                        
                        navigate('/dashboard')
                        } else {
                        alert('Invalid Username or Password ');
                    }
                } else {
                    alert('enter all the fileds')
                    setErrors(validateErrors);
                }
    }
    
    return(
        <div className="" style={background}>
            <form onSubmit={handleSubmit} className=" form-control w-25 mx-auto position-relative p-5  bg-transparent" style={{top:60}}>
                <h4 className="text-center text-dark-emphasis">Login</h4>
                <input 
                    type="text" 
                    name='name'
                    className="form-control rounded-pill mt-3 mb-3 bg-transparent" 
                    placeholder="Username" 
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <small className="text-danger"> {errors.name}</small> }
                <input 
                    type="password"
                    name='email'
                    className="form-control rounded-pill mt-3 mb-3 bg-transparent" 
                    placeholder="Password" 
                    value={formData.email}
                    onChange={handleChange}
                    />
                {errors.email && <small className="text-danger">{errors.email}</small>}
                <input type="checkbox" className=" form-check-input" />Remember Me
                <button 
                type="submit" 
                className="form-control rounded-pill mt-3 mb-3 btn btn-light bg-transparent"
                > Login</button>
                <Link to="" className='nav-link text-white'>Don't have an account? Register</Link>
            </form>
        </div>
    )
}
