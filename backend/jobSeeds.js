require('dotenv').config()
require('./config/database')
const Job = require('./models/Job')

Job.insertMany([
    { jobTitle:"Outdoor sales agent",
      companyName:"Zain BH",
      description:"The Aim of the Zain Youth Professional Development Program is to help university students achieve 18 months of work experience in the Distribution & Alternative Channels Department. The outdoor sales agent must work towards achieving maximum sales profitability, growth and account penetration within a market segment by effectively selling the company products."   
    },
    { jobTitle:"Java Developer",
      companyName:"Citi",
      description:"Utilize knowledge of applications development procedures and concepts, and basic knowledge of other technical areas to identify and define necessary system enhancements, including using script tools and analyzing/interpreting code."      
    },
    { jobTitle:"Engineering operations Technician",
     companyName:"Amazon",
     description:"Amazon Web Services (AWS) is growing rapidly, and we are looking for Engineering Operations Technician Interns to join our expanding Data Center team in Bahrain."
    },
    { jobTitle:"Entry Level Cyper Threat Analyst",
     companyName:"CTM360",
     description:"We are looking to appoint a Cyber Threat Analyst for our Bahrain office.This is a research-intensive role requiring critical thinking and a base knowledge of IT."
    },
    { jobTitle:"Graduate Software Engineer",
     companyName:"Cobblestone Energy",
     description:"If you have excellent programming skills, strong problem-solving skills, and a passion for developing and improving applications utilizing cutting edge technologies, then we would like to meet you. t"
    },
    { jobTitle:"Data Engineer",
     companyName:"EMEA",
     description:"We are offering a Data Engineer position to help us change the world of digital advertising together."
    },
    { jobTitle:"Software Quality Assurance Engineer",
     companyName:"EMEA",
     description:"As a QA Engineer in our Connector Development team, you will look at all issues from the customers’ perspective. You are responsible for testing Data Virtuality connectors (SQL code, based on REST/SOAP API interaction, JDBC connectivity, file-based parsing, and more), validating the data, and matching actual/expected data."
    },
    { jobTitle:"Lead Software Engineer Python",
     companyName:"EMEA",
     description:"We're looking for an enthusiastic Engineering Lead who is passionate about security - someone who loves being part of a team, whilst enjoying the autonomous nature of working remotely."
    },
    { jobTitle:"Full Stack Developer",
      companyName:"6 Degree Technologies",
      description:"Highly skilled applications programmer with experience in front-end and back-end systems. Should be able to develop and design the architecture of application such as the front end, back-end components, ensures responsiveness of front-end and works alongside with graphic designers to design application properties and components. In addition, the developer shall be aquanited with well-known systems development tasks."
    },
    { jobTitle:"Graduate Electrical Engineer",
     companyName:"Worley",
     description:"s part of the Worley Graduate Community and under supervision and mentorship within the electrical engineering department, you will assist in the delivery of engineering services to Worley' and our customers'."

    }


     
])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))





