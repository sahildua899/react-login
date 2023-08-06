import React from 'react'



 const Verify = () => {
    const location = window.location.href.split('/')[4]
    
    const handleSubmit = async(event)=>{
        event.preventDefault();
        await fetch('http://localhost:6004/api/users/authenticate', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
              token:location
            })
        }).then((res)=>res.json()).then((data)=>alert(data.message))
    }
  return (
    <div className="wrapper">
    <div className="title-text">
      <div className="title login">Verify Account</div>
     
    </div>
    <div className="form-container">
      <div className="form-inner">
      <form  className="verify" onSubmit={handleSubmit}>
          <div className="field">
            <input user-select="none" type="text" placeholder="Verification Code" required name="verifyCode" disabled id="verifyCode" value={location} />
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Verify Account"/>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}


export default Verify