import { UserAccount } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserAccount = null;

const UserReducer = createSlice({
  initialState,
  name: "UserReducer",
  reducers: {
    saveUserData(state, action) {
      state = action.payload;
    },
  },
});

export const { saveUserData } = UserReducer.actions;
export default UserReducer.reducer;
