      export default function list({ data }){
        return (
            <>
               {
                data.map((item) =>
                <div className="flex justify-center">
                    <div className={`w-96 flex items-center justify-between my-1 rounded-xl h-14 ${item.Status?"bg-green-500":"bg-red-600"}`}>
                        <div className="ml-2 text-white">{item.task} - {item.time}</div>
                            <div className="mr-2">
                                {
                                   item.Status?<i className="fa fa-check" aria-hidden="true"></i>
                                   :<i className="fa fa-close  ml-2" aria-hidden="true"></i>
                                    
                                }
                                
                        
                               {item.Status? <i className="fa fa-trash ml-2" aria-hidden="true"></i>:null}

                            </div>
                        
                    </div>
                </div>
                )
               }
                
                
            </>
        )
      }  
        