import React, {useState, useEffect} from 'react'
import JoblyApi from '../api'
import '../css/Jobs.css'



const Jobs = () => {

    const INITIAL_JOBS = [
        {
            title: "Jake's New Job Role",
            companyName: "Evil Empire",
            salary: 1000000,
            equity: 100
        }
    ]

    const [jobs, setJobs] = useState(INITIAL_JOBS)

    useEffect(()=>{
        async function getJobs(){
            const res = await JoblyApi.getJobs()
            setJobs([...jobs, ...res.jobs])
            console.log(res.jobs[0])
        }
        getJobs()
    },[])

    return (
        <div className="Jobs">
            <div className="Jobs-title">Jobs</div>
            {jobs.map(job => (
                <div className="Jobs-job">
                    <div className="Jobs-job-title">{job.title}</div>
                    <div className="Jobs-job-company-name">Company: {job.companyName}</div>
                    <div className="Jobs-job-salary">Salary: {job.salary}</div>
                    <div className="Jobs-job-equity">Equity: {job.equity}</div>
                    <div className="Jobs-job-apply">Apply</div>
                </div>
            ))}

        </div>
    )
}

export default Jobs