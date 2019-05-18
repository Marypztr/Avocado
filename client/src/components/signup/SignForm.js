import React from 'react'

export default function SignForm({handleInputs, handleSubmit}) {
  return (
    <div>
       <input type="text" name="username" onChange={handleInputs}/>
      <input type="email" name="email" onChange={handleInputs}/>
      <input type="password" name="password" onChange={handleInputs}/>
    </div>
  )
}
