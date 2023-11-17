import { PaginationResponse, Room } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { data: PaginationResponse<Room> } = {
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

const RoomsReducer = createSlice({
  initialState,
  name: "RoomsReducer",
  reducers: {
    saveRooms(state, action) {
      state.data = action.payload;
    },
  },
});

export const { saveRooms } = RoomsReducer.actions;
export default RoomsReducer.reducer;
