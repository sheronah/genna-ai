import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import TextArea from "@/components/ui/textarea"

function SelectTopic({onUserSelect}) {

  const options = ['custom prompt','Random Ai Story','Scary Story']
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
        <h2 className='font-bold text-2xl'>Content</h2>{/*primarycolor needed*/}
        <p className='text-gray-500'>What is the topic of your video</p>
        <Select onValueChange={(value) => {setSelectedOption(value)
          value!='custom prompt'&& onUserSelect('topic,value')
        }}>
          <SelectTrigger className="w-full mt-2 p-6 text-lg">
           <SelectValue placeholder="Content Type" />
            </SelectTrigger>
           <SelectContent>

            {options.map((item,index) => (
              <SelectItem value={item}>{item}</SelectItem>

            ))}
           
         
         </SelectContent>
       </Select>
       {selectedOption =='custom prompt' &&
       <TextArea className="mt-3"
       onChange={(e) => onUserSelect('topic',e.target.value)}
       placeholder="Write prompt on which you want to generate video"/>
          

       }

        
    </div>
  )

}

export default SelectTopic