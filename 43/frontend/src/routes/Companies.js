import React, {useState, useEffect} from 'react'
import JoblyApi from '../api'
import '../css/Companies.css'



const Companies = () => {

    const INITIAL_COMPANIES = [
        {
            name: "Jake's Company",
            description: "Will one day take over the world!"
        }
    ]

    const [companies, setCompanies] = useState(INITIAL_COMPANIES)

    useEffect(()=>{
        async function getCompanies(){
            const res = await JoblyApi.getCompanies()
            setCompanies([...companies, ...res.companies])
            console.log(res)
        }
        getCompanies()
    },[])

    return (
        <div className="Companies">
            <div className="Companies-title">Companies</div>
            {companies.map(company=> (
                //These will be NavLinks eventually
                <div className="Companies-company">
                    <div className="Companies-company-title">{company.name}</div>
                    <div className="Companies-company-description">{company.description}</div>
                </div>
            ))}

        </div>
    )
}

export default Companies