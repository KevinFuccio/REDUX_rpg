import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Job } from "../../interfaces";
import JobData from '../../MockData/job-list.json'



const initialState:Job[] = [...JobData]

const jobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{
        hiring: (state, action:PayloadAction<number>) => {
            const selectedJobIndex = state.findIndex(job => job.id === action.payload);
            state.forEach((e:Job)=>{
                if(e.hired  === true){
                    e.hired = false
                }
            })
            if (selectedJobIndex !== -1) {
                state[selectedJobIndex].hired = true;
            }
        },
        quit:(state,action:PayloadAction<number>)=>{
            const selectedJobIndex = state.findIndex(job => job.id === action.payload);
            if (selectedJobIndex !== -1) {
                state[selectedJobIndex].hired = false;
            }
        },
        
    },
    
})

export const {hiring,quit} = jobSlice.actions

export default jobSlice.reducer