import { useState } from "react"
import React from 'react'
import { Card } from 'react-bootstrap'
import './Fetch.css';
import ExpandGrades from './ExpandGrades';



const Fetch = () => {
const [searchName, setSearchName] = useState('')
const [gradeAverage, setGradeAverage] = useState([])
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





const [isOpen, setIsOpen] = useState(false)



// let expandGrades = <div className="collapse">
//                 <button className ="buttonCollapse" onClick={() => setIsOpen(!isOpen) }>
            
//                 {
//                 isOpen &&<div className="button-sign" aria-hidden="true"> - </div>
//                 }
            
//             {!isOpen &&<div className="button-sign" aria-hidden="true"> + </div>}
            
            
            
//                 </button>
            
//                 {isOpen &&<div className="expandedGrades"> p</div>}
            
//             </div>



const [showGradesList, setShowGradesList] = useState(false);






    let studentCard = data.filter((item, grades) => {
            if (searchName == ""){
                return item
            }
            else if (item.firstName.toLowerCase().includes(searchName.toLocaleLowerCase()) || item.lastName.toLowerCase().includes(searchName.toLocaleLowerCase())){
                return item
            }


        }).map((item) => (
        
                    <Card key={item.grades} style={{ width: '85%' }} className="m-2">
                    
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
                                        <p>Average:  {item.grades.reduce((a,b) => a + parseInt(b), 0) / item.grades.length}%</p>
                                    
                                        <div className="text">
                                        <button className ="buttonCollapse" onClick={() => setIsOpen(!isOpen) }>
                                        {
                                        isOpen &&<div className="button-sign" aria-hidden="true"> - </div>
                                        }
                                        {!isOpen &&<div className="button-sign" aria-hidden="true"> + </div>}
                                        </button>
                                        {isOpen &&<div className="test"> 
                                        
                                            <p>Test 1:   {item.grades[0]}%</p>
                                            <p>Test 2:   {item.grades[1]}%</p>
                                            <p>Test 3:   {item.grades[2]}%</p>
                                            {/* <p >Test 4:   {item.grades[3]}%</p>
                                            <p className="Grade">Test 5:   {item.grades[4]}%</p>
                                            <p className="Grade">Test 6:   {item.grades[5]}%</p>
                                            <p className="Grade">Test 7:   {item.grades[6]}%</p>
                                            <p className="Grade">Test 8:   {item.grades[7]}%</p>

] */}
                                        
                                        </div>}
                                        </div>
                                    


                                    



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
   
                
              
              {/* <h1>hi</h1> */}

        </div>

       
        
          
      


		</>

)
}

export default Fetch











