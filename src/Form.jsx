import React, { useEffect, useState } from "react";
import { Toaster, toast } from 'sonner'
import axios from "axios";

export const Form = ({onFresh,editdata}) => {
  

  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  useEffect(()=>{
   if (editdata) {
    setName(editdata.name);
    setAge(editdata.age)
    
  } else {
    setName('');
    setAge('')
   } 
  },[editdata])
  
  
  const handleSubmit = async(e)=>{
      e.preventDefault();
      const alldata = {name,age}
      if (editdata) {
        await axios.put(`https://taskbc.onrender.com/gokul/get/${editdata._id}`,alldata)
        toast.success('List has been created')
      } else {
        await axios.post("https://taskbc.onrender.com/gokul",alldata)
        toast.success('List has been created')
      }
    
      onFresh()
  }


  return (
    <div>
    <Toaster richColors position="top-center"  />
     <h1 className='text-center mt-5 mb-3'>Task Manager</h1>
    <div className="container d-flex flex-row justify-content-center mb-5 mt-3">
      <div className="row">
        <div className="col-md-12">
      <form onSubmit={handleSubmit}>
        <input type="text" name="" className="table form-control" placeholder="Enter your role"  value={name} onChange={(e)=>setName(e.target.value)} id="" />
        <input type="text" name=""  className="table form-control" placeholder="Enter your Today Task" value={age}  onChange={(e)=>setAge(e.target.value)} id="" />
       <div className="d-flex justify-content-center">
       <input type="submit" value="submit" className="btn btn-primary" />
       </div>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
};
