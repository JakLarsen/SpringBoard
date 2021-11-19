import React from "react";
import '../css/Job.css'




const Job = ({job, handleApply, applied = false}) => {

    let btnClassList = applied ? "Job-apply-btn Job-item" : "Job-apply-btn Job-item unapplied"
    return(
        <div className="Job">
            <div className="Job-title">{job.title}</div>
            <div className="Job-id Job-item">ID: {job.id}</div>
            <div className="Job-salary Job-item">Salary: ${job.salary}</div>
            <div className="Job-equity Job-item">Equity: {job.equity}%</div>
            <div onClick={handleApply} className={btnClassList} data-id={job.id} data-applied={applied}>
                {applied ? 'Applied' : 'Apply'}
            </div>
        </div>
    )
}

export default Job