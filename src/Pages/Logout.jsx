import React from 'react'
import Log from '../Componant/Login/Log'

const Logout = () => {
  const inputinfo=[{type:"email" , placeholder:"Enter your Email" , name:"email"},
    {type:"password",placeholder:"Enter your Password", name:"password"}
  ]
  return (
    <div>
     <Log apipath='/swiggy/login' pagename="Welcome Back 👋" btnname="Login" links="true" data={inputinfo}></Log>
    </div>
  )
}

export default Logout
