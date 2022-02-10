import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import {BoardService} from './service/BoardService'

export const initialState = {
    user: null,
    users:null,
    filterUsers: null
}

export const setUser = createAsyncThunk('data/setUser',async ()=>{
    const data = await  BoardService.getUser()
    return data
})

export const setBoard = createAsyncThunk('data/setBoard',async ()=>{
    const data = await  BoardService.getBoard()
    return data
})


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFilterUsers:(state,action)=>{
            state.filterUsers = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(setUser.fulfilled, (state, action)=>{
            state.user=action.payload
        })
        .addCase(setBoard.fulfilled, (state, action)=>{
            state.users=action.payload
        })
    }
})

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
    }
})

export const {setFilterUsers} = dataSlice.actions

export default store