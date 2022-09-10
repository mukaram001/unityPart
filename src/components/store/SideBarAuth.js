import { createSlice } from "@reduxjs/toolkit";

const initialState = {showSideBar: true}
const SideBarSlice = createSlice({
    name:'SideBar',
    initialState,
    reducers:{
        openSideBar(state){
            state.showSideBar = true
        },
        closeSideBar(state){
            state.showSideBar = false
        }
    }
})
export const showSideBarAction = SideBarSlice.actions;

export default SideBarSlice.reducer