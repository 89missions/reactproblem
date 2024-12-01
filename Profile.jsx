import React, { useState } from 'react'
import Editprofile from './Editprofile'

const Profile = (props) => {

    // create a state variable, update the state variable on every click , if the update is true, show the edit Profile, if its false ,dont show edit profile

    const[toggler,setToggler]=useState(false)

    let profileToggler = () => {
        setToggler(!toggler)
    }

  return (
    <>
        <div>Hello {props.userName}</div>
        <button className="btn" onClick={profileToggler}>Edit Profile</button>

        {toggler && <Editprofile setUsername = {props.setuserName}/>}
       
        
    </>
  )
}

export default Profile