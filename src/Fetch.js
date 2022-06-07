import { useState } from "react"
import React from 'react'
import { Card } from 'react-bootstrap'
import './Fetch.css';




const Fetch = () => {
const [searchName, setSearchName] = useState('')
const [data, setData] = useState([])
const getRequest = () => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        setData(json.students)

        
    })
    
}


getRequest()



    let studentCard = data.filter((item) => {
            if (searchName == ""){
                return item
            }
            else if (item.firstName.toLowerCase().includes(searchName.toLocaleLowerCase())){
                return item
            }
        }).map((item) => (



                    <Card key={item.city} style={{ width: '85%' }} className="m-2">
                    


                    <Card.Body>
                        <Card.Text>
                            <div class="content"> 
                                    <div class="content-text">    
                                    <h1>  <b>{item.firstName} {item.lastName}</b>  </h1> 
                            <div class="pic-text"> 
                                        <div class="pic"> <img src={item.pic} width="150px" height="150px"></img></div>
                                    <div class="text"> 
                                    <b> 
                                        <p>Email: {item.email}</p>
                                        <p>Company: {item.company}</p>
                                        <p>Skill: {item.skill}</p>
                                        <p>Average: {item.grades.reduce((a, b) => a + b, 0) }</p>
                                        </b>
                                        </div>
                                        </div>
                                    </div>
                            </div>

                        </Card.Text>
                    </Card.Body>
                </Card>
                ))

            


	return (
		<>
        <div>
            <div class="input-feilds"> 
            <input type="text" class="input" placeholder="Search by name" onChange={event => {setSearchName(event.target.value)}}/>
            <input type="text" class="input" placeholder="Search by tag"/>
        </div>
                {studentCard} 

        </div>
      


		</>

)
}

export default Fetch







