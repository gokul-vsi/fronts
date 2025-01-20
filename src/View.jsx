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
       <div className="container">
       <div className="row">
      {
        getdata.length > 0 ? (getdata.map((dd,index)=>(
          <div className='col-md-3' key={index}>
            <div className="border border-light-subtle p-5 mb-2 mb-md-4 h-75 task">
            <h5 className='text-center'>{dd.name}</h5>
            <p className='text-center'>{dd.age}</p>
            <div className='d-flex gap-3 mb-2 justify-content-center'>
            <button className='btn btn-success' onClick={()=>handleEdit(dd)}>Edit</button>
            <button className='btn btn-danger' onClick={()=>handleDelete(dd._id)}>delete</button>
            </div>
            </div>
          </div> 
        ))):(<p>Data is loading....</p>)
      }
      </div>
      </div>
    </div>
  )
}
