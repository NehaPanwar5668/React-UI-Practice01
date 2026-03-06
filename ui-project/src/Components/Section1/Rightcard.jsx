import React from 'react'
import Rightcontent from './Rightcontent'


const Rightcard = (props) => {
    console.log(props);
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl shrink-0 '>
      <img className='h-full w-full object-cover' src={props.img}/>
     <Rightcontent id={props.id} intro={props.intro}
       tag={props.tag} color={props.color}/>
 
    </div>
  )
}

export default Rightcard
