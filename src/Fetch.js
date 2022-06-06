import { useState } from "react"
import React from 'react'
import { Card } from 'react-bootstrap'
import './Fetch.css';

const Fetch = () => {
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

let studentCard = data.map((item) => (
    <Card key={item.city} style={{ width: '0%' }} className="m-2">
                    
                    <Card.Body>
                        <Card.Text>
                            <div class="content"> 
                                    <div class="content-text">    
                                    <h1> {item.firstName} {item.lastName}</h1> 
                            <div class="pic-text"> 
                                        <div class="pic"> <img src={item.pic} width="100px" height="100px"></img></div>
                                    <div class="text"> 
                                        <p>Email: {item.email}</p>
                                        <p>Company: {item.company}</p>
                                        <p>Skill: {item.skill}</p>
                                        <p>Average: {item.grades}</p>
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
            <h3>STUDENT PROFILES</h3>
     

                {studentCard}
        </div>
      


		</>

)
}

export default Fetch







