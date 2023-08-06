import React, { useState } from 'react'

const defaultFormValue ={
    email:''
}
 const Forgot = () => {
    const [email,setEmail] = useState(defaultFormValue)

    const handleChange = (event)=>{
        const {name,value} = event.target
        setEmail({...email, [name]:value})
    }

   const resetFormValue = () =>{
    setEmail(defaultFormValue)
   }

   const handleSubmit = async(event)=>{
    event.preventDefault();
    await fetch('http://localhost:6004/api/users/forgot', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(email)
    }).then((res)=>res.json()).then((data)=>alert(data.message))
    resetFormValue()
   }
  return (
    <div className="wrapper">
    <div className="title-text">
      <div className="title login">Forgot Account Password</div>
     
    </div>
    <div className="form-container">
      <div className="form-inner">
      <form action="#" className="reset" onSubmit={handleSubmit}>
          <div className="field">
            <input type="email" placeholder="Email Address" required name="email" onChange={handleChange}/>
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


export default Forgot