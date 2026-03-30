
import React from 'react'
import Card from './components/Card'

const App = () => {

const jobs = [
  {
    brandLogo: "https://i.pinimg.com/736x/77/99/e4/7799e4fa43745c7193228791a424d389.jpg",
    company: "Google",
    posted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    company: "Apple",
    posted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    company: "Meta",
    posted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/74/88/6b/74886b52f5219b5fb45546c95e23202c.jpg",
    company: "Amazon",
    posted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    company: "Netflix",
    posted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg",
    company: "Microsoft",
    posted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    company: "Apple",
    posted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    company: "Google",
    posted: "6 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    company: "Meta",
    posted: "2 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/74/88/6b/74886b52f5219b5fb45546c95e23202c.jpg",
    company: "Amazon",
    posted: "1 month ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Bangalore, India"
  }
];
jobs.map(function(elem,idx)
{
  console.log(idx);
})

  return (

    
    <div className='parent'>App
    
   {jobs.map(function(elem,idx)
   
   {

    
    return <div key={idx}>
       <Card key={idx} brandLogo={elem.brandLogo} company={elem.company} post={elem.post} posted={elem.posted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
    </div>
   })}




    
    
    
    </div>

    
  )
}

export default App