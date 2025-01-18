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
      <form onSubmit={handleSubmit}>
        <input type="text" name="" value={name} onChange={(e)=>setName(e.target.value)} id="" />
        <input type="text" name=""  value={age}  onChange={(e)=>setAge(e.target.value)} id="" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
