import React from "react";
import '../css/Job.css'




const Job = ({job}) => {

    return(
        <div className="Job">
            <div className="Job-title">{job.title}</div>
            <div className="Job-salary Job-item">Salary: ${job.salary}</div>
            <div className="Job-equity Job-item">Equity: {job.equity}%</div>
            <div className="Job-apply-btn Job-item">Apply</div>
        </div>
    )
}

export default Job