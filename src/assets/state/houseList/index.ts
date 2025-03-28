import { createSlice } from "@reduxjs/toolkit"
import houseList from "../../MockData/house-list.json"

const initialState = [...houseList]

const houseSlice = createSlice({
    name:"house",
    initialState,
    reducers:{
        
    }
})

export default houseSlice.reducer;