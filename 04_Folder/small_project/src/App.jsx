import JobCard from "./components/Cards";
import "./App.css"


const Cards = () => {
    const jobData = [
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            title: "Software Developer Intern",
            company: "IBM",
            salary: "₹6,00,000 / year",
            role: "Developer",
            description: "Work on backend systems using Python and cloud technologies."
        },
        {
            logo: "https://static.vecteezy.com/system/resources/previews/020/190/476/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
            title: "Front-End Developer",
            company: "Infosys",
            salary: "₹4,50,000 / year",
            role: "Frontend Engineer",
            description: "Develop UI using React, JavaScript, and APIs."
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Tata_Consultancy_Services_Logo.svg",
            title: "Full Stack Engineer",
            company: "TCS",
            salary: "₹5,20,000 / year",
            role: "Full Stack",
            description: "Work on web apps using MERN stack and SQL databases."
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_2015_logo.svg",
            title: "Cloud Developer",
            company: "Google",
            salary: "₹20,00,000 / year",
            role: "Cloud Developer",
            description: "Work on Google Cloud services with scalable systems."
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            title: "Backend Engineer",
            company: "Amazon",
            salary: "₹18,00,000 / year",
            role: "Backend",
            description: "Develop high-performance APIs and microservices."
        }
    ];
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                padding: "20px"
            }}
        >
            {jobData.map((job,index) => {
                return <div key={index}>
                     <JobCard company={job.company} logo={job.logo} title={job.title} salary={job.salary} role={job.role} description={job.description}/>
                </div>
                
                
               
            })}
        </div>
    )
};

export default Cards;