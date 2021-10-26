import React, {useState, useEffect} from "react";
import axios from 'axios'
import ProfileSearchForm from "./ProfileSearchForm";

const ProfileViewer = ({profileName = 'elie', color="purple"}) => {

    const [data, setData] = useState(profileName)
    const [url, setUrl] = useState(`https://api.github.com/users/${profileName}`)

    useEffect(()=>{
        async function loadProfile(){
            console.log("loadProfile()")
            const res = await axios.get(url)
            setData(res.data.name)
        }
        loadProfile();
        return ()=> console.log('Cleaning up')
    },[url]);  

    const search = (term) => {
        setUrl(`https://api.github.com/users/${term}`)
    }
        
    return (
        <div>
            {data ? <h1>Hey, {data}</h1> : <h1>Loading...</h1>}
            <ProfileSearchForm search = {search}/>
        </div>
    )
}

export default ProfileViewer