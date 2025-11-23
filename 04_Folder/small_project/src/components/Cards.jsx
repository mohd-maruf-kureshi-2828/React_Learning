import React from 'react';
const JobCard = ({logo, title,company,salary,description,role}) => {
    return (
        <div className="job-card">
            <img src={logo} className="job-logo" alt="Company Logo" />

            <h2 className="job-title">{title}</h2>
            <h3 className="job-company">{company}</h3>

            <p className="job-role"><b>Role:</b> {role}</p>
            <p className="job-salary"><b>Salary:</b> {salary}</p>

            <p className="job-description">{description} </p>

            <button className="apply-btn">Apply Now</button>
        </div>
    );
};

export default JobCard;
