import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

function List() {
    const [users, setusers] = useState([])
  const fetchdata = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response)
    setusers(response.data)
  }
  useEffect(() => {
    fetchdata()
  }, [users])
  return (
    <div style={{display:"flex",flexWrap:'wrap',justifyContent:"center",gap:"20px"}}>
      {users.map(el=>
         <Card style={{ width: '18rem' }}>
         
         <Card.Body>
           <Card.Title>
            {el.name}
           </Card.Title>
           <Card.Text>
            email: {el.email}
           </Card.Text>
           
           <Card.Text>
            phone: {el.phone}<br/>
            website:{el.website}
           </Card.Text>
           
         </Card.Body>
       </Card>
      ) }
    </div>

    
  )
}

export default List