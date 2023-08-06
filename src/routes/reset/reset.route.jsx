import React, { useState } from 'react'

const defaultFormValue = {
    password:'',
    confirmpassword:''
  }

  const location = window.location.href.split('/')[4]

 const Reset = () => {
    const [pass,setNewPass] = useState(defaultFormValue)
    const {password, confirmpassword} = pass
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setNewPass({...pass, [name]:value})
    }
    const resetFormFields = () =>{
        setNewPass(defaultFormValue)
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(password!==confirmpassword) {
            alert('Passwords are not Same');
            return;
        }
        await fetch('http://localhost:6004/api/users/newpass', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                token:location,
                password
            })
        }).then((res)=>res.json()).then((data)=>alert(data.message))
        resetFormFields()
    }
  return (
    <div className="wrapper">
    <div className="title-text">
      <div className="title login">Reset Password</div>
     
    </div>
    <div className="form-container">
      <div className="form-inner">
      <form action="#" className="newpass" onSubmit={handleSubmit}>
          <div className="field">
            <input type="password" placeholder="New Password" required name="password" onChange={handleChange}/>
          </div>
          <div className="field">
            <input type="password" placeholder="Confirm Password" required name="confirmpassword" onChange={handleChange}/>
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Reset"/>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}


export default Reset