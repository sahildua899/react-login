import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const defaultFormValue ={
    firstname:'',
    lastname:'',
    phone:'',
    email:'',
    password:'',
    confirmpassword:''
}

const Register = () => {
    const [formFields,setFormFields] = useState(defaultFormValue)
    const {password, confirmpassword} = formFields;

    const handleChange = (event) =>{
        const {name,value} = event.target;

        setFormFields({...formFields, [name]:value})
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormValue)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password!==confirmpassword) {
            alert('Passwords is not same');
            return;
        }
        await fetch('https://healthy-tan-perch.cyclic.app/api/users/addNew', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formFields)
        }).then((res)=>res.json()).then((data)=>alert(data.message))
        resetFormFields()
    }
  return (
    <div className="wrapper">
    <div className="title-text">
      <div className="title login">Register Account</div>
     
    </div>
    <div className="form-container">
      <div className="form-inner">
      <form className="signup" id="signupForm" onSubmit={handleSubmit} >
          <div className="field">
            <input type="text" placeholder="First Name" required name="firstname" onChange={handleChange} />
          </div>
          <div className="field">
            <input type="text" placeholder="Last Name" required name="lastname" onChange={handleChange}/>
          </div>
          <div className="field">
            <input type="number" placeholder="Phone Number" required name="phone" onChange={handleChange}/>
          </div>
          <div className="field">
            <input type="email" placeholder="Email Address" required name="email"onChange={handleChange}/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required name="password"onChange={handleChange}/>
          </div>
          <div className="field">
            <input type="password" placeholder="Confirm password" required name="confirmpassword"onChange={handleChange}/>
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Signup"/>
          </div>
         <Link to={'/'}>Already Have an Account? Login Now</Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register