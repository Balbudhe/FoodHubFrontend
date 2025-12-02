import React from 'react'
import Log from '../Componant/Login/Log'
import { useParams } from 'react-router-dom';
const Reset = () => {
    const inputinfo=[
        {type:"text" , placeholder:"Enter a new Password" , name:"password"},
        {type:"text", placeholder:"Confirm  password", name:"confirmpassword"}
    ];

    const {token} =useParams();
  return (
    <div>
        <Log data={inputinfo} apipath={`/swiggy/reset/${token}`} btnname="Reset" pagename="Reset Password"></Log>
    </div>
  )
}

export default Reset
