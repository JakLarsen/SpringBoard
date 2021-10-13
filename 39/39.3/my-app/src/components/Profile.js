import React from 'react';


const Profile = ({username, password}) =>{
   return(
       <div>
           <h1>Welcome back, {username}</h1>
            <h3>Here's your password: {password}</h3>
       </div>
   )  
}

export default Profile