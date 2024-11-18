import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../interfaces";
import CarData from "../../MockData/car-list.json"

const initialState:Car[] = [...CarData]

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{
        buyCar: (state,action:PayloadAction<number | null>)=>{
                if(action.payload !== null){
                    state[action.payload].isPurchase = true
                }

            },
        sellCar:(state, action:PayloadAction<number | null>)=>{
            if(action.payload !== null){
                state[action.payload].isPurchase = false
            }
        }
    }
})

export const {buyCar,sellCar} = carSlice.actions
export default carSlice.reducer