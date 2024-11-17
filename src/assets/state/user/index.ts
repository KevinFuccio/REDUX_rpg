import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import { UNEMPLOYED } from "../../utils";

const initialState:User = {
    name:"",
    age:0,
    money:0,
    gender:"",
    job:'Unemployed',
    jobYearlySalary:''
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
       jobHire: (state,action:PayloadAction<string[]>)=>{
        const [job,jobYearlySalary] = action.payload;
        state.job = job
        state.jobYearlySalary = jobYearlySalary
       },
       jobPay:(state,action:PayloadAction<string>)=>{
        const paycheck = action.payload.replace(/[$,]/g, '');
        state.money += Math.round(Number(paycheck)/12)
       },
       jobQuit:(state)=>{
        state.job = UNEMPLOYED;
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
            name:"Pivotkid80",
            age:26,
            money:250,
            gender:"M",
            job:'Unemployed',
            jobYearlySalary:''
            
        };
    }
)

export const {jobHire,jobPay,jobQuit} = userSlice.actions
export default userSlice.reducer