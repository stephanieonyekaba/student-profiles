import { useState } from "react"
import React from 'react'
import { Card } from 'react-bootstrap'

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
    <Card key={item.city} style={{ width: '30%' }} className="m-2">
                    <Card.Header>{item.firstName}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <h3>hfjsdfjsdflk</h3>
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







