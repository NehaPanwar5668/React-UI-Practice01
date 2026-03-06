import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'


const App = () => {

const user=[
  {
    img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D' , 
  intro:'ndfnkld rfrefe af erg aer t r tae r ta er  t ae ta er ta er t er t rtrtrt  ' ,
   tag:'Satisfied',
   color:"red",
  },
   {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D' , 
  intro:'kjekjduehnwm,nvunmfiule hfeieuoifulewjkmf kjfeluoiefew ' ,
   tag:'Underserved',
   color:"green"
  },
   {
    img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D' , 
  intro:'hkjhekjdfiouiemdioewjne,mfliuewfm,.flirfnrnmvn v f   frefetergrth  ' ,
   tag:'Underbaned',
   color:"orange"
  },
   {
    img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D' , 
  intro:'hkjhekjdfiouiemdioewjne,mfliuewfm,.flirfnrnmvn v f   frefetergrth  ' ,
   tag:'Underwear',
   color:"blue"
  },
  {
    img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D' , 
  intro:'hkjhekjdfiouiemd lorem k hrello smy dmdskljewlnm,nfmdsmeeeeeeeeeeeeeee ffffffffffffffffff eeeeeeeeeeeeeee frefetergrth  ' ,
   tag:'Average',
   color:"brown"
  },

]

  return (
     <div>
<Section1 user={user}/>

    
  
    </div>
  )
}

export default App
