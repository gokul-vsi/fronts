import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { Form } from './Form'
import axios from 'axios'

export const View = () => {

  const [getdata,setGetdata] = useState([])
  const [editdata,setEditdata] = useState();

  const fetchdata = async()=>{
    try {
      const response  =  await axios.get("https://taskbc.onrender.com/gokul/get")
      setGetdata(response.data)
    } catch (error) {
      console.log(data)
    }
  }

const handleDelete = async(datas)=>{
  try {
    await axios.delete(`https://taskbc.onrender.com/gokul/get/${datas}`)
    fetchdata()
    toast.error("deleted successfully")
  } catch (error) {
    console.log(error)
  }
}
function handleEdit(datas){
  setEditdata(datas)
}

  useEffect(()=>{
   fetchdata()
  },[])
    
  return (
    <div>
        <Form onFresh={fetchdata()} editdata={editdata}/>
      {
        getdata.length > 0 ? (getdata.map((dd,index)=>(
          <div key={index}>
            <h1>{dd.name}</h1>
            <h2>{dd.age}</h2>
            <button onClick={()=>handleDelete(dd._id)}>delete</button>
            <button onClick={()=>handleEdit(dd)}>Edit</button>
          </div> 
        ))):(<p>Data is loading....</p>)
      }
    </div>
  )
}
