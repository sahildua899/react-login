import React, { useState } from 'react'
import './login.styles.css'

const defaultFormValue = {
    email:'',
    password:''
}

 const Login = () => {
    const [formFields, setFormFields] = useState(defaultFormValue)
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormValue)
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        await fetch('http://localhost:6004/api/users/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formFields)
        }).then((res)=>res.json()).then((data)=>alert(data.message));
        resetFormFields()
    }
  return (
    <div className="wrapper">
    <div className="title-text">
      <div className="title login">Login Account</div>
     
    </div>
    <div className="form-container">
      <div className="form-inner">
        <form action="#" className="newpass" onSubmit={handleSubmit}>
          <div className="field">
            <input type="email" placeholder="Email Address" required name="email" onChange={handleChange}/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required name="password" onChange={handleChange}/>
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login"/>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}


export default Login