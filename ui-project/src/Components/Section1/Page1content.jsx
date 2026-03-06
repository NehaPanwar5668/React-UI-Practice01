import React from 'react'
import Left from './Left'
import Right from './Right'


const Page1content = (props) => {
  console.log(props);
  return (
    <div className='py-10 px-18 flex gap-10 items-center  h-[90vh] '>
        <Left/>
        <Right user={props.user}/>
      </div>
  )
}

export default Page1content
