import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import SideBarReducer from "./SideBarAuth";
import userReducer from "./user";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: { SideBar: SideBarReducer, user: userReducer },
});

export const useAppDispatch = () => useDispatch();

export default store;
