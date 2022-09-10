import { createSlice } from "@reduxjs/toolkit";
import { LocalStoragePersistanceService } from "../../../persist/LocalStorage";

const initialState = {
  user: null,
  jwt: "",
};
const localStorage = new LocalStoragePersistanceService();
export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { user, jwt } = action.payload;
      state.jwt = jwt;
      state.user = user;
      localStorage.setItem("user", user);
      localStorage.setItem("jwt", jwt);
    },
  },
});

// Actions
export const { setUserData } = usersSlice.actions;

// Thunks

export const loginUser = (userInfo) => async (dispatch) => {
  dispatch(setUserData(userInfo));
};

export default usersSlice.reducer;
