import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import {BoardService} from './service/BoardService'


export const initialState = {
    user: null,
    board:null
}

export const setUser = createAsyncThunk('data/setUser',async ()=>{
    const data = await  BoardService.getUser()
    return data
})
export const setBoard = createAsyncThunk('data/setBoard',async ()=>{
    const data = await  BoardService.getBoard()
    // console.log('data', data);
    return data
})

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(setUser.fulfilled, (state, action)=>{
            state.user=action.payload
        })
        .addCase(setBoard.fulfilled, (state, action)=>{
            // state.board=action.payload
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

export default store