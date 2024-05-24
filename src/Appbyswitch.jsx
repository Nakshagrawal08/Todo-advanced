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
    const filterlist = (filterbychoice)=>{
    switch (filterbychoice) {
      case "All":
        SetListOfTaks(tasks)
        break;
      case "Completed":
        SetListOfTaks(tasks.filter((item) => item.Status))
        break;
      case "Incompleted":
        SetListOfTaks(tasks.filter((item) => !item.Status))
        break;
      default:
        SetListOfTaks(tasks)
        break;
    }
    }
  return (
    <>
        <div class="mx-64 my-28 w-auto drop-shadow-xl ... border-gray border-thin shadow-gray bg-gray-600  p-5">

        <Form />
        <div class=" flex mx-44 text-center my-6">
        <div onClick={() => {filterlist ("All")}}><Button button="All" color="blue"/></div>
        <div onClick={() => {filterlist ("Completed")}} ><Button button="Completed" color="green"/></div>
        <div onClick={() => {filterlist ("Incompleted")}} ><Button button="Incompleted" color="red"/></div>
        </div>
        <List data={ListOfTaks}/>
        </div>
    </>
  )
}

export default App
