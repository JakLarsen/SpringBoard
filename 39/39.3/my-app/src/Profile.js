



const Profile = ({username, password, firstName, lastName}) =>{
    return (
        <div>
            <h1>Hello, {username}!</h1>
            <p>Here is your profile information:</p>
            <ul>
                <li>Oops, here's your password: {password}</li>
                <li>First Name: {firstName}</li>
                <li>Last Name: {lastName}</li>
            </ul>
        </div>
    )

}

export default Profile;

