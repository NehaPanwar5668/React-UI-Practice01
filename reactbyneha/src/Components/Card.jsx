import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props);
  return (
    <div className='card'>
        <div className='top'>
            <img src={props.brand}></img>
            <button>Save <Bookmark/></button>
            </div>
        <div className="center">
            <h2>{props.company} <span>{props.date}</span> </h2>
            <h1>{props.post}</h1>
            <div className='center1'>
                <h4>{props.tag}</h4>
                <h4>{props.tag2}</h4>
            </div>
             </div>
          
           <div className='bottom'>
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
             <button>Apply Now</button>
            </div>
       </div>
     
       
      
  )
}

export default Card
