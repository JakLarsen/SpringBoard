import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import JoblyApi from './api.js'


//Make an api call using our JoblyApi class in api.js to:
//let's say /companies, and display any of the data.
const TestApiCall = () => {

    const INITIAL_COMPANIES = [
        {
            handle: 'Jakes Company'
        }
    ]

    const [companies, setCompanies] = useState(INITIAL_COMPANIES)

    useEffect(()=>{
        async function getCompany(){
            const res = await JoblyApi.getCompany('anderson-arias-morrow')
            console.log(res)
            let newCompany = {...res}
            console.log(newCompany)
            setCompanies([...companies, newCompany])
        }
        getCompany()
    },[])

    return (
        <div>
            <h1>Our test API call data:</h1>
            {companies.map(company=> (
                <h3>{company.handle}</h3>
            ))}

        </div>
    )
}

export default TestApiCall