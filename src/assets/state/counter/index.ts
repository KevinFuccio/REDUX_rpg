import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CounterSlice } from "../../interfaces";



const initialState:CounterSlice = {
    value:0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        incrementByValue:(state,action:PayloadAction<number>)=>{
            state.value += action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(incrementAsync.pending,()=>{
            console.log("in pending");
        }).addCase(incrementAsync.fulfilled,(state,action:PayloadAction<number>)=>{
            state.value += action.payload;
        })
    }
})
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async()=>{
        await new Promise((res)=>setTimeout(res,1000));
        return 10;
    }
)
export const {increment,decrement,incrementByValue} = counterSlice.actions

export default counterSlice.reducer