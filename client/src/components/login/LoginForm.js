import React from 'react'

export default function LoginForm({handleInputs, handleSubmit}) {
  return (
    <div>
      <input type="email" name="email" onChange={handleInputs}/>
      <input type="password" name="password" onChange={handleInputs}/>
    </div>
  )
}
