import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TimeManagement } from "../../interfaces";
const initialState:TimeManagement = {
    intervalId: null
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
       
    },
})


export const {settingInterval,clearingInterval} = timeManageSlice.actions
export default timeManageSlice.reducer