import React from 'react'
import Rightcard from './Rightcard'

const right = (props) => {
  console.log(props);
  return (
    <div id='right' className='h-full min-w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto' >
   {props.user.map(function(e, index){
    return <Rightcard key={index} id={index} img={e.img}
    intro={e.intro}
    tag={e.tag}
    color={e.color}
    />
   })}
      
    </div>
  )
}

export default right
