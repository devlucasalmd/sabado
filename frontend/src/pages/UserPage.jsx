import React from 'react'
import Loginform from '../components/Loginform';
import RegisterForm from '../components/RegisterForm';
function UserPage (){

  return(
    <div>
      {
       <RegisterForm/>
      }
    </div>
  )
}

export default UserPage;