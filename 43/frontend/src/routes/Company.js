import React, {useEffect, useState} from 'react'
import '../css/Company.css'
import {useParams, useNavigate} from 'react-router-dom'
import JoblyApi from '../api'
import Loading from "../Loading";
import Job from './Job';



const Company = () => {

    const { handle } = useParams();
    const [company, setCompany] = useState("")
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    //Need to grab the company information from API on load
    useEffect(()=>{
        async function getCompany(){
            const res = await JoblyApi.getCompany(handle)
            setCompany(res)
        }
        getCompany()
    }, [])

    if (!company) return <Loading/>;

    return (
        <div className="Company">
            <div className="Company-top-wrap">
                <div className="Company-back-btn" onClick={goBack}>Back</div>
                <div className="Company-text-wrap">
                    <div className="Company-title">{company.name}</div>
                    <div className="Company-description">{company.description}</div>
                </div>
            </div>
            <div className="Company-job-wrap">
                {company.jobs.map(job => (
                    <Job job = {job}/>
                ))}
            </div>
        </div>
    )
}

export default Company