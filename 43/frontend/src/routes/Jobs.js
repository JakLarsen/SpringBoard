import React, {useState, useEffect, useContext} from 'react'
import JoblyApi from '../api'
import '../css/Jobs.css'
import Job from './Job'
import UserContext from "../UserContext";



const Jobs = () => {

    const { currentUser } = useContext(UserContext);
    console.log(`in Jobs, currentUser: `, currentUser)

    const [jobs, setJobs] = useState([])
    const [formData, setFormData] = useState("")
    const [jobsAppliedFor, setJobsAppliedFor] = useState({})

    const getJobs = async () => {
        const res = await JoblyApi.getJobs()
        setJobs([...jobs, ...res.jobs])
    }

    const getJobsAppliedFor = async () => {
        console.log('in getJobsAppliedFor; Jobs')

        let jobs = new Set()
        let username = currentUser.username
        const res = await JoblyApi.getUserAppliedJobs({username})
        res.map(job => (
            jobs.add(job.job_id)
        ))
        setJobsAppliedFor([...jobs])
    }

    useEffect(()=>{
        getJobs()
        getJobsAppliedFor()
    },[])


    const handleSearchData = (e) => {
        const {name, value} = e.target
        setFormData(formData => (
            {
                ...formData,
                [name]: value
            }
        ))
    }
    
    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        let ourSearchTerm = formData.JobsInput
        let ourJobs = await JoblyApi.getFilteredJobs(ourSearchTerm)
        setJobs(ourJobs.jobs)
    }

    const repopulateJobs = async () => {
        const res = await JoblyApi.getJobs()
            setJobs([...jobs, ...res.jobs])
    }

    const handleApply = async (e) => {
        console.log('in handleApply()')

        const username = currentUser.username
        const jobID = parseInt(e.target.dataset.id)
        const data = {username, jobID}

        console.log(jobID)
        console.log('checkIfApplied: ', checkIfApplied(jobID))
        if (checkIfApplied(jobID)){
            console.log(`Unapplying to job: `, jobID)
            const res = await JoblyApi.removeApplication(data)
            const newJobApps = jobsAppliedFor.filter(id => id !== jobID) 
            setJobsAppliedFor([...newJobApps])
        }
        else{
            try{
                const ourApplicationRes = await JoblyApi.applyToJob(data)
                const newJobApps = jobsAppliedFor
                newJobApps.push(ourApplicationRes.applied)
                setJobsAppliedFor([...newJobApps])
            }
            catch(e){
                console.log("Error: ", e)
            }
        }
    }

    const checkIfApplied = (jobID) => {
        console.log(`in checkIfApplied, our applications: `, jobsAppliedFor, `our jobID: `, jobID)
        try{
            console.log(jobsAppliedFor.includes(jobID))
            return jobsAppliedFor.includes(jobID)
        }
        catch(e){
            console.log(`Error, check currentUser: `, currentUser, e)
        }
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
                    <Job job={job} handleApply={handleApply} applied={checkIfApplied(job.id)}/>
                </div>
            ))}

        </div>
    )
}

export default Jobs