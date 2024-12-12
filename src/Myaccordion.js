import React, { useState } from 'react'

const Myaccordion = ({question , answer}) => {

  const [show , setShow] = useState(false);
  return (
    <>
    <div className='main_heading'>
    
       {/* arrow function ko use kar ke hm bna liye ki jab + par click ho ga taab hi useState true hai toh false kare aur false ho toh true  */}

      {/* agar show ki value true hai toh - sign dikhao aur agar true hai toh positive */}

      <h3 className='question'><span className = "button" onClick={() => setShow (!show)}>{show? "—" :  "+"}</span>{question}</h3>
    </div>

    {/* is answer ko taab hi dekhaiye jab useState true ho   */}
   {
    show && <p className='answer'> {answer} </p>
   }
    </>
  )
}

export default Myaccordion