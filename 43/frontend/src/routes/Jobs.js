import React, {useState, useEffect} from 'react'
import JoblyApi from '../api'
import '../css/Jobs.css'
import Job from './Job'



const Jobs = () => {

    const [jobs, setJobs] = useState([])
    const [formData, setFormData] = useState("")

    useEffect(()=>{
        async function getJobs(){
            const res = await JoblyApi.getJobs()
            setJobs([...jobs, ...res.jobs])
            console.log(res.jobs[0])
        }
        getJobs()
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
        let ourSearchTerm = formData.JobsInput
        console.log(ourSearchTerm)
        let ourJobs = await JoblyApi.getFilteredJobs(ourSearchTerm)
        setJobs(ourJobs.jobs)
    }

    const repopulateJobs = async () => {
        const res = await JoblyApi.getJobs()
            setJobs([...jobs, ...res.jobs])
            console.log(res)
    }

    return (
        <div className="Jobs">
            <div className="Jobs-title">Jobs</div>
            <div onClick={repopulateJobs} className="Companies-list-btn">Back to List</div>
            <form onSubmit={handleSearchSubmit} className="Jobs-search">
                <input 
                    id="Jobs-input" name="JobsInput" 
                    type="text" placeholder="Enter job title"
                    onChange={handleSearchData}
                />
                <button id="Jobs-search-btn">Search</button>
            </form>
            {jobs.map(job => (
                <div className="Jobs-job">
                    <Job job={job}/>
                </div>
            ))}

        </div>
    )
}

export default Jobs