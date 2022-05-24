/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import background from '../images/background.png';
import '../styles/createAccount.scss';
import Chart from './Chart';
function CreateAccount() {
  const initialValues = {email:"",password:"",cnf_password:"",name:"",phone:"",}
  const [formValues,setFormvalues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);
  const [accept,setAccept] = useState(false);
  const handelChange = (e)=>{
    const {name,value} = e.target;
    setFormvalues({...formValues,[name]:value})
  }


 const handelSubmit = (e) =>{
   console.log("Inside Hndel Submit");
     e.preventDefault();
     setFormErrors(validate(formValues));
     setIsSubmit(true);
 }

useEffect(()=>{
   console.log(formErrors);
  if(Object.keys(formErrors).length === 0 && isSubmit && accept){
    console.log(formValues);
  }
},[formErrors])


 const validate = (values)=>{
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if(!values.email){
      errors.email = "Email is required";
    }
    else if(!regex.test(values.email)){
      errors.email = "Email is Invalid!";
    }
    if(!values.password){
      errors.password = "Password is required";
    }
    else if(values.password.length < 4){
      errors.password = "Password must be more than 4 character";
    }
    if(!values.cnf_password){
      errors.cnf_password = "Confirm Password is required";
    }
    else if(values.cnf_password !== values.password){
      errors.cnf_password = "Password does not match with previous one";
    }
    if(!values.name){
      errors.name = "Full Name is required";
    }
    if(!values.phone){
      errors.phone = "Phone number is required";
    }
    else if(values.phone.length < 10){
      errors.phone = "Phone number is Invalid!";
    }
    return errors;
 }

  return (
    <>
   {Object.keys(formErrors).length === 0 && isSubmit && accept ?<Chart/>:
   <div className="container">
          <div className="container_left">
              <img src={background} alt="background_image"/>
          </div>
          <div className="conatiner_right">
          {/* <pre>{JSON.stringify(formValues,undefined,4)}</pre> */}
             <form onSubmit={handelSubmit}>
                 <h2>Create an account</h2>
                 <label htmlFor="email">Your Email Address</label>
                 <input type="text" name='email'   value={formValues.email} onChange={handelChange}/>
                 <p className="error_message">{formErrors.email}</p>
                 <label htmlFor="password">Your Password</label>
                 <input type="text" name='password'  value={formValues.password} onChange={handelChange}/>
                 <p className="error_message">{formErrors.password}</p>
                 <label htmlFor="cnf_password">Confirm Your Password</label>
                 <input type="text" name='cnf_password'  value={formValues.cnf_password} onChange={handelChange}/>
                 <p className="error_message">{formErrors.cnf_password}</p>
                 <label htmlFor="name">Your Full Name</label>
                 <input type="text" name='name'   value={formValues.name} onChange={handelChange}/>
                 <p className="error_message">{formErrors.name}</p>
                 <label htmlFor="phone_no">Your Phone Number</label>
                 <input type="number" name='phone'   value={formValues.phone} onChange={handelChange}/>
                 <p className="error_message">{formErrors.phone}</p>
                 <div className="conatiner_right_box">
                 <input type="checkbox" name="accept"  required onClick={() => setAccept(true)} onChange={handelChange}/><span>I read all  the terms and conditions</span>
                 </div>
                 <div className="conatiner_right_btn">
                 <button className="container_right">Create account</button>
                 </div>
             </form>
          </div>
    </div>
   }
    
    </>
  )
}

export default CreateAccount