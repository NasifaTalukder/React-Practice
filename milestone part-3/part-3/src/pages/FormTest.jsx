import React, { useState } from 'react'

const FormTest = () => {
    let[input,setInput]=useState();
    let[show,setShow]=useState();

    const FormHandle=(event)=>{
        setInput(event.target.value);
    }
const SubmitHandle=()=>{
    setShow(input);
    
}

  return (
    <>
    <h1>Application Form...</h1>
    <p>Input Value is {show}</p>
    <input type="text" 
    placeholder='Enter Your name' 
    onChange={FormHandle}
    />
    <button type='submit' onClick={SubmitHandle}>Submit</button>
    </>
  )
}

export default FormTest
