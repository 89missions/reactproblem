import React, { useState } from 'react'


const Editprofile = (props) => {

    const[newUser,setnewUser]=useState('')

    let tracktostate = (e)=>{
        setnewUser(e.target.value)
    }

    let userValue = (e)=>{
        e.preventDefault();
        props.setuserName(newUser)
    }

  

  return (
    <div>
        <form action="" className='form' onSubmit={userValue}>
           <input type="text" onChange = {tracktostate} placeholder='Hello , input your name' />
           <button type="submit" >Submit</button>
         </form>
    </div>
  )
}

export default Editprofile