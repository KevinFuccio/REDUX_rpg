import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TimeManagement } from "../../interfaces";
const initialState:TimeManagement = {
    intervalId: null,
    day: 1,
    month: 1,
    year: 2024
}

const timeManageSlice = createSlice({
    name:"timeManage",
    initialState,
    reducers:{
       settingInterval: (state,action:PayloadAction<number>)=>{
        state.intervalId = action.payload
       },
       clearingInterval:(state)=>{
        state.intervalId = null
       },
       setDay:(state)=>{
           if(state.day === 30 || state.day === 31){
               state.month = state.month + 1
               state.day = 0
            }
            if(state.month === 13){
                state.year = state.year + 1
                state.month = 1
            }else{
                state.day = state.day + 1
            }
       }
       
    },
})


export const {settingInterval,clearingInterval,setDay} = timeManageSlice.actions
export default timeManageSlice.reducer