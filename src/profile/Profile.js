import React from 'react'
import './Profile.css'


const Profile = ({name,work}) => {
  return (
    <div className='profile'>
       <div className="profile_left">
       <p>Name : {name}</p>
       <p>Work : {work}</p>
       
       </div>
       <div className="profile_right">
        <button>Delete</button>
       </div>

    </div>
  )
}

export default Profile