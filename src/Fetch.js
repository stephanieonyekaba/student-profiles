import { useState } from "react"
import React from 'react'
// import { Card } from 'react-bootstrap'

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


	return (
		<>
        <div>
            <h3>api calll</h3>
            {/* {JSON.stringify(data)} */}
            <div>
                <ul>
                {data.map((item) => (
                    <li>
                        {item.firstName}
                    </li>
                ))}
                </ul>
            </div>
      
        </div>

		</>

)
}

export default Fetch
