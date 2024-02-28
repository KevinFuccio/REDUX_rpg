import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces";

const initialState:User = {
    name:"",
    age:0,
    money:0,
    gender:"",
    job:'Unemployed'
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
       jobHire: (state,action:PayloadAction<string>)=>{
        state.job = action.payload
       },
       jobPay:(state,action:PayloadAction<string>)=>{
        const paycheck = action.payload.replace(/[$,]/g, '');
        state.money += Math.round(Number(paycheck)/12)
       }
    },
    extraReducers: (builder)=>{
        builder.addCase(userFetchData.pending,()=>{
           
        }).addCase(userFetchData.fulfilled,(state,action:PayloadAction<User>)=>{
            return {
                ...state,
                ...action.payload
            }
        })
    }
})
export const userFetchData = createAsyncThunk(
    "user/userFetchData",
    async()=>{
        await new Promise((res)=>setTimeout(res,1000));
        return {
            name:"Alberto",
            age:26,
            money:250,
            gender:"M",
            job:'Unemployed'
        };
    }
)

export const {jobHire,jobPay} = userSlice.actions
export default userSlice.reducer