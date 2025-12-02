import React from 'react'
import Log from '../Componant/Login/Log';

const Forgotpage = () => {
    const inputinfo=[{type:"Email",placeholder:"Enter your Email",name:"email"}]
  return (
    <div>
      <Log apipath='/swiggy/forgot' pagename="Forgot Password" btnname="Send the link"  data={inputinfo}></Log>
    </div>
  )
}

export default Forgotpage;
