import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Job } from "../../interfaces";
import JobData from '../../MockData/job-list.json'



const initialState:Job[] = [...JobData]

const jobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{
        getJob: (state, action:PayloadAction<number>) => {
            const selectedJobIndex = state.findIndex(job => job.id === action.payload);
            state.forEach((e:Job)=>{
                if(e.hired){
                    e.hired = false
                }
            })
            if (selectedJobIndex !== -1) {
                state[selectedJobIndex].hired = true;
            }
        },
        quitJob:(state,action:PayloadAction<number>)=>{
            const selectedJobIndex = state.findIndex(job => job.id === action.payload);
            if (selectedJobIndex !== -1) {
                state[selectedJobIndex].hired = false;
            }
        },
        
    },
    
})

export const {getJob,quitJob} = jobSlice.actions

export default jobSlice.reducer