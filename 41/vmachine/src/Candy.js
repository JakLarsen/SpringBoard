




const Candy = () => {
    return(
        <div>
            <h1>You've selected some Candy. Dispensing.</h1>
            <button onClick={()=> window.history.back()}>Go Back</button>
            <img src='https://target.scene7.com/is/image/Target/GUEST_b2266b79-ae02-4556-8e8e-55a101d641e5?wid=488&hei=488&fmt=pjpeg'/>
        </div>
    )
}

export default Candy