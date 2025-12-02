import React from 'react'
import Log from '../Componant/Login/Log'

const Register = () => {
    const inputinfo=[{type:"text",placeholder:"Enter your name",name:"name"},
        {type:"Email" , placeholder:"Enter your Email" , name:"email"},
        {type:"Password", placeholder:"Enter your password", name:"password"}
    ]
  return (
    <div>
      <Log apipath='/swiggy/register' btnname="Register" pagename="Register Page" data={inputinfo}></Log>
    </div>
  )
}

export default Register;
