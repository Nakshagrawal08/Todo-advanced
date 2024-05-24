import { useState } from 'react'
import Button from './assets/components/button'
import Form from './assets/components/from'
import List from './assets/components/list'
let tasks=[
  {
    task:"1st",
    time:"8:00 PM",
    Status:true
  },
  {
    task:"2nd",
    time:"8:00 PM",
    Status:true
  },
  {
    task:"3rd",
    time:"8:00 PM",
    Status:false}
]
function App() {
  
    const [ListOfTaks , SetListOfTaks] = useState(tasks)
    
  
  return (
    <>
        <div class="mx-64 my-28 w-auto drop-shadow-xl ... border-gray border-thin shadow-gray bg-gray-600  p-5">

        <Form />
        <div class=" flex mx-44 text-center my-6">
        <div onClick={ () =>{
          SetListOfTaks(tasks)
        }}><Button button="all" color="blue"/></div>
        <div onClick={ () =>{   
          let filteredlist = tasks.filter((t) => t.Status)       
          SetListOfTaks(filteredlist)
        }} ><Button button="Completed" color="green"/></div>
        <div onClick={ () =>{
            let filteredlist = tasks.filter((t) => !t.Status)       
            SetListOfTaks(filteredlist)        
          }  
          
        } ><Button button="Uncompleted" color="red"/></div>
        </div>
        <List data={ListOfTaks}/>
        </div>
    </>
  )
}

export default App
