import { UserAccount } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { data: UserAccount } = {
  data: null,
};

const UserReducer = createSlice({
  initialState,
  name: "UserReducer",
  reducers: {
    saveUserData(state, action) {
      state.data = action.payload;
    },
    logoutUser(state) {
      state.data = null;
    },
  },
});

export const { saveUserData, logoutUser } = UserReducer.actions;
export default UserReducer.reducer;
