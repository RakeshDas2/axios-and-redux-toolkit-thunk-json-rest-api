import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deletePost, getPosts, updateData} from '../redux/allSlice'
import AddData from './AddData'

const Home = () => {
    const recivedData=useSelector(state=>state)
    const dispatch=useDispatch()
    console.log(recivedData);
    const data=recivedData.postData
    const [count,setCount]=useState(110)
    const [open,setOpen]=useState(false)
    const [iOpen,setIOpen]=useState(false)
    const [iData,setIData]=useState({
      body: "",
      id: `${count}`,
      title: "",
      userId: 10
  }
    )

    const [id,setId]=useState('')

    useEffect(()=>{
        dispatch(getPosts())
    },[])

    const updateDataFor=(id)=>{
        setIOpen(!iOpen)
        setId(id)
        setCount(count+1)
    }

    const handelChange=(e)=>{
      const postCopy={...iData}
        postCopy[e.target.name]=e.target.value
        setIData(postCopy)
    }
    console.log(iData);
    const updateDataGoing=()=>{
      dispatch(updateData({id,iData}))
    }
  return (
    <div>
   
  {open && <AddData/>}
{iOpen && <> <input name='title' value={iData.title} onChange={(e)=>{handelChange(e)}}/> <button onClick={()=>{updateDataGoing()}}>update</button></>}
        {data && data.posts.map(ele=>{
            return<p key={ele.id}>
                 {ele.title}
                 <button onClick={()=>{dispatch(deletePost(ele.id))}}>delete</button>
                 <button onClick={()=>{setOpen(!open)}}>Add</button>
                 <button onClick={()=>{updateDataFor(ele.id)}}>Update</button>
            </p>
        })}
    </div>
  )
}

export default Home