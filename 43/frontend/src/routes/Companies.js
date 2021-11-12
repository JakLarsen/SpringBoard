import React, {useState, useEffect} from 'react'
import JoblyApi from '../api'
import '../css/Companies.css'
import {NavLink} from "react-router-dom";



const Companies = () => {

    const [companies, setCompanies] = useState([])
    const [formData, setFormData] = useState("")

    useEffect(()=>{
        async function getCompanies(){
            const res = await JoblyApi.getCompanies()
            setCompanies([...companies, ...res.companies])
            console.log(res)
        }
        getCompanies()
    },[])

    const handleSearchData = (e) => {
        const {name, value} = e.target
        setFormData(formData => (
            {
                ...formData,
                [name]: value
            }
        ))
        console.log(name, value)
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        let ourSearchTerm = formData.CompaniesInput
        console.log(ourSearchTerm)
        let ourCompanies = await JoblyApi.getFilteredCompanies(ourSearchTerm)
        setCompanies(ourCompanies.companies)
    }

    const repopulateCompanies = async () => {
        const res = await JoblyApi.getCompanies()
            setCompanies([...companies, ...res.companies])
            console.log(res)
    }

    return (
        <div className="Companies">
            <div className="Companies-title">Companies</div>
            <div onClick={repopulateCompanies} className="Companies-list-btn">Back to List</div>
            <form onSubmit={handleSearchSubmit} className="Companies-search">
                <input 
                    id="Companies-input" name="CompaniesInput" 
                    type="text" placeholder="Enter company name" 
                    onChange={handleSearchData}/>
                <button id="Companies-search-btn">Search</button>
            </form>
            {companies.map(company=> (
                //These will be NavLinks eventually
                <NavLink exact to={`/companies/${company.handle}`} className="Companies-company-Navlink">
                    <div className="Companies-company">
                        <div className="Companies-company-title">{company.name}</div>
                        <div className="Companies-company-description">{company.description}</div>
                    </div>
                </NavLink>
                
            ))}

        </div>
    )
}

export default Companies