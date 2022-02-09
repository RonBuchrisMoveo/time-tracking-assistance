import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import {BoardService} from './service/BoardService'

export const initialState = {
    user: null,
    users:null,
}

export const setUser = createAsyncThunk('data/setUser',async ()=>{
    const data = await  BoardService.getUser()
    return data
})
// export const setUsers = createAsyncThunk('data/setUser',async ()=>{
//     const data = await  BoardService.getUser()
//     return data
// })
export const setBoard = createAsyncThunk('data/setBoard',async ()=>{
    const data = await  BoardService.getBoard()
    return data
})
export const setBoards = createAsyncThunk('data/setBoardsId',async ()=>{
    const data = await  BoardService.getBoards()
    return data
})

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setUsers:(state,action)=>{
            state.users = action.payload
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
        .addCase(setBoards.fulfilled, (state, action)=>{
            state.board=action.payload
        })
    }
})

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
    }
})

// type RootState = ReturnType<typeof store.getState>

// export const selectCar = (state: RootState) => state.data
export const {setUsers} = dataSlice.actions

export default store