import React from "react";
import Profile from './Profile';

const ProfilePage = ({profiles}) => {
    return (
        <div>
            <h1>Your Users' Profiles:</h1>
            {profiles.map(p => (
                <Profile 
                username={p.username} 
                password={p.password} 
                firstName={p.firstName}
                lastName={p.lastName} />
            ))}
        </div>
    )
}

export default ProfilePage