import React from 'react'
import Profile from './Profile'

const ProfilePage = ({profiles}) =>{
    
    return (
        <div>
            {profiles.map(i => (
                <Profile
                key={i.id} 
                username={i.username}
                password={i.password}
                />
            ))}
        </div>
    )
}

export default ProfilePage