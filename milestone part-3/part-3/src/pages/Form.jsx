import React, { useState } from 'react'
//     let[input,setInput]=useState();
//     let[show,setShow]=useState();

//     const FormHandle=(event)=>{
//         setInput(event.target.value);
//     }
// const SubmitHandle=(Obj)=>{
//     Obj.preventDefault();
//     setShow(input); 
// }

const Form = () => {
    let dataStore={
        name:"",
        company:"",
        designation:"",
        page:"",
        course:""

    }
    let[data,setData]=useState(dataStore);
    let[show,setShow]=useState("");

  const FormHandle=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data)

  }
    const SubmitHandle=(Obj)=>{
        Obj.preventDefault();
        setShow(data);
    }
  return (
    <>
    <h1>Application Form...</h1>
    <p>My Name is {show.name}</p>
    <p>My Company Name is {show.company}</p>
    <p>My company Designation is {show.designation}</p>
    <p>My company Page Name is {show.page}</p>
    <p>My course is {show.course}</p>
 <form action="" onSubmit={SubmitHandle}>
 <input type="text" 
    placeholder='Enter Your name' 
    onChange={FormHandle}
    name='name'
    className='input'
    />
    <input type="text" 
    placeholder='Enter Your Company name' 
    onChange={FormHandle}
    name='company'
    className='input'
    /><br/><br/>
     
<input type="text" 
    placeholder='Enter Your Company Designation' 
    onChange={FormHandle}
    name='designation'
    className='input'
    />

    <input type="text" 
    placeholder='Enter Your Company page name' 
    onChange={FormHandle}
    name='page'
    className='input'
    /><br/><br/>

<input type="text" 
    placeholder='Enter Your course' 
    onChange={FormHandle}
    name='course'
    className='input'
    />

    <button type='submit'>Submit</button>
    </form>
    </>

  )
}

export default Form
