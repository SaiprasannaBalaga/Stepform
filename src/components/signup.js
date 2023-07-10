import React from 'react'

function Signup({ formData, setFormData}) {
  return (
    <div className= "signupcontainer">
        <input type='text' placeholder='email' value={formData.email}
        onChange={(event) => setFormData({...formData, email:event.target.value})}/>
        <input type='text' placeholder='password' value={formData.password}
        onChange={(event) => setFormData({...formData, password:event.target.value})}/>
        <input type='text' placeholder='confirmpassword' value={formData.confirmpassword}
        onChange={(event) => setFormData({...formData, confirmpassword:event.target.value})}/>

     
    </div>
  )
}

export default Signup;