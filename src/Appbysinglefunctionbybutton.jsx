import { useState } from 'react'
import Button from './assets/components/buttonwithintclick'
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
    const filterlist = (Status)=>{
      SetListOfTaks(tasks.filter((item)=>Status == undefined ? true : Status==item.Status))
    
    }
  return (
    <>
        <div class="mx-64 my-28 w-auto drop-shadow-xl ... border-gray border-thin shadow-gray bg-gray-600  p-5">

        <Form />
        <div class=" flex mx-44 text-center my-6">
        <Button button="All" color="blue" filter={() => { filterlist() }}/>
        <Button button="Completed" color="green" filter={() => { filterlist(true) }}/>
        <Button button="Incompleted" color="red" filter={() => { filterlist(false) }}/>
        </div>
        <List data={ListOfTaks}/>
        </div>
    </>
  )
}

export default App
