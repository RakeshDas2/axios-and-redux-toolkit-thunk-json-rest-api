import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import httpInstance from "../axioConfig/axiosConfig";


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await httpInstance.get('/posts')
        return response.data
    }

)

export const deletePost=createAsyncThunk(
    'posts/deletePost',
    async (id,thunkApi)=>{
         await httpInstance.delete(`/posts/${id}`)
        thunkApi.dispatch(getPosts())
    }
)

export const addData=createAsyncThunk(
    'posts/addData',
    async(data,thunkApi)=>{
        console.log(data);
     await httpInstance.post('/posts',data)
     thunkApi.dispatch(getPosts())
    }
)

export const updateData=createAsyncThunk(
    'posts/updateData',
    async(da,thunkApi)=>{
         console.log(da);
      await httpInstance.put(`/posts/${da.id}`,da.iData)
     thunkApi.dispatch(getPosts())
    }
)


const allSlice = createSlice({
    name: 'postData',
    initialState: {
        posts: [],
        isLoading: false
    },
    extraReducers:{
        [getPosts.pending]:(state)=>{
            state.isLoading=true;
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.posts=action.payload;
            state.isLoading=false
        },
        [getPosts.rejected]:(state)=>{
            state.isLoading=false
        }
    }

})

export default allSlice.reducer