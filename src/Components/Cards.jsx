import React, { useEffect, useState } from 'react'

function Cards() {
    const data = {name:"",email:"",password:""}
    const [inputValue,setInputValue] = useState(data);
    const [flage,setFlage] = useState(false);
    useEffect(()=>{
       console.log("Registered");
    },[flage])

    function inputData(e){
      setInputValue({...inputValue,[e.target.name]:e.target.value});
        console.log(inputValue);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputValue.name || !inputValue.email || !inputValue.password){
            alert("All field are mandatory"); 
        }else{
            setFlage(true)
        }
    }
  return (
   <>
   <pre>
    {(flage)?<h2>Hello {inputValue.name} , You are registeration Successfully</h2>:""}
   </pre>
    <form onSubmit={handleSubmit}>
        <div>
            <h2>Registration Form</h2>
        </div>
       <div>
       <input type="text" name='name' placeholder='Enter Your Name' value={inputValue.name} onChange={inputData}></input>
       </div>
       <div>
       <input type="text" name='email' placeholder='Enter Your Email' value={inputValue.email} onChange={inputData}></input>
       </div>
       <div>
       <input type="text" name='password' placeholder='Enter Your Password' value={inputValue.password} onChange={inputData}></input>
       </div>
       <div>
          <button>Submit</button>
       </div>
    </form>
    </>
  )
}

export default Cards
