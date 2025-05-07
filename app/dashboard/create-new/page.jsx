"use client"
import React, { useState } from 'react'
import SelectStyle from './_components/SelectStyle';
import SelectTopic from './_components/SelectTopic';
import { Button } from '../../../components/ui/button';
import SelectDuration from './_components/SelectDuration';

function CreateNew() {
  const [formData, setFormData] = useState();

  const onHandleInputChange=(fieldName,fieldValue)=>{
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));


  }
  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl'> Create New</h2>{/*primarycolor needed*/}
      <div className='mt-10 shadow-md p-10'>
        {/*select topic*/}
        <SelectTopic onUserSelect={ onHandleInputChange}/>

        {/*select style*/}
        <SelectStyle onUserSelect={onHandleInputChange}/>
        {/*Duration*/}
        <SelectDuration onUserSelect={onHandleInputChange}/>
        {/*CreateButton*/}
        <Button className='mt-10 w-full'> Create short video</Button>

      </div>
    </div>
  )
}

export default CreateNew