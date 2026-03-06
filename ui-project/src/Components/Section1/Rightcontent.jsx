import React from 'react'
import {ArrowRight} from 'lucide-react'

const Rightcontent = (props) => {
    console.log(props.color);
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
    <h1 className='bg-white rounded-full h-12 w-12  flex justify-center  items-center font-bold text-4xl'>{props.id+1}</h1>
    <div>
        <p className=' text-2xl leading-relaxed text-white mb-10 '>
            {props.intro}
        </p>
        <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' text-white px-8 py-2 font-semibold text-2xl rounded-full'>{props.tag}</button>
            <button><ArrowRight className='h-12 w-12 text-white px-2 py-2 rounded-full '/></button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Rightcontent
