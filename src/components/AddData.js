import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../redux/allSlice'

const AddData = () => {
    const dispatch=useDispatch()
    const [post, setPost] = useState({
        body: "",
        id: '',
        title: "",
        userId: 10
    })

    const eventHandler=(e)=>{
        const postCopy={...post}
        postCopy[e.target.name]=e.target.value
        setPost(postCopy)
    }
    return (
        <div>
            <label>Body: </label>
            <input name='body' value={post.body} onChange={eventHandler} /><br/>
            <label>id: </label>
            <input name='id' value={post.id} onChange={eventHandler} /><br/>
            <label>title: </label>
            <input name='title' value={post.title} onChange={eventHandler} /><br/>
            <label>UserId: </label>
            <input name='userId' value={post.userId} onChange={eventHandler} /><br/>
<button onClick={()=>dispatch(addData(post))}>Save</button>
        </div>
    )
}

export default AddData