import React from 'react'

function Personalinfo({ formData, setFormData}) {
  return (
    <div className= "personalinfocontainer">
    <input type='text' placeholder='FirstName' value={formData.FirstName}
        onChange={(event) => setFormData({...formData, FirstName:event.target.value})}/>
    <input type='text' placeholder='LastName' value={formData.LastName}
        onChange={(event) => setFormData({...formData, LastName:event.target.value})}/>
    <input type='text' placeholder='Username' value={formData.Username}
        onChange={(event) => setFormData({...formData, Username:event.target.value})}/>
</div>
  )
}

export default Personalinfo;