import React from 'react'
import cardImg from './logo.svg';
function User(props){
return(
    <>
    <div className='card-container'>
        <span className={props.status ? "pro onLine" : "pro offLine"}>{props.status ? "Online" : "Offline"}</span>
        <img className="img" src={cardImg} alt='' width="150px" height="150px"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
            <button className='primary'>Message</button>
            <button className='primary outline'>Followers</button>
        </div>
        <div className='skills'>
            <h5>Skills</h5>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
    </>
)
}
const Card = () => {
  return (
    <div>
      {/**<User name="Senthilkumar" city="Trichy" description="Front-End Developer"
      skills={["UI/UX","Bootstrap","CSS","JavaScript","React Js","React Native"]}
       status={false}/> */}
       {UserData.map((user,index)=>(
        <User key={index} 
        name={user.name}
        city ={user.city}
        description = {user.description}
        skills = {user.skills}
        status = {user.status}
        profile = {user.profile}
        />
       ))}
    </div>
  )
}

const UserData = [
    {
        name : "Senthilkumar",
        city : "Nammakal",
        description: "Front-End Developer",
        skills:["UI/UX","Bootstrap","CSS","JavaScript","React Js","React Native"],
        status : false,
        profile: "./logo.svg",
    },
    {
        name : "Ramkumar",
        city : "Karur",
        description: "Back-End Developer",
        skills:["UI/UX","Bootstrap","CSS","JavaScript","React Js","React Native"],
        status : true,
        profile: "./logo.svg",
    },
    {
        name : "William James",
        city : "Salem",
        description: "SQL Developer",
        skills:["UI/UX","Bootstrap","CSS","JavaScript","React Js","React Native"],
        status : true,
        profile: "./logo.svg",
    },
    {
        name : "Deepika S",
        city : "Thuraiyur",
        description: "SQL Developer",
        skills:["UI/UX","Bootstrap","CSS","JavaScript","React Js","React Native"],
        status : false,
        profile: "./logo.svg",
    },
    {
        name : "Rithvik S",
        city : "Thuraiyur",
        description: "AI Developer",
        skills:["UI/UX","Bootstrap","CSS","JavaScript","React Js","React Native"],
        status : true,
        profile: "./logo.svg",
    },
    {
        name : "Yathvik S",
        city : "Thuraiyur",
        description: "Data Analyst Developer",
        skills:["UI/UX","Bootstrap","CSS","JavaScript","React Js","React Native"],
        status : true,
        profile: "./logo.svg",
    },
    {
        name : "VAshika K",
        city : "Thuraiyur",
        description: "Testing",
        skills:["UI/UX","Bootstrap","CSS","JavaScript","React Js","React Native"],
        status : false,
        profile: "./logo.svg",
    }
]
export default Card
