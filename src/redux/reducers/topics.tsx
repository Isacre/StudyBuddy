import { PaginationResponse, Room, Topic } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { data: PaginationResponse<Topic> } = {
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

const TopicsReducer = createSlice({
  initialState,
  name: "TopicsReducer",
  reducers: {
    saveTopics(state, action) {
      state.data = action.payload;
    },
  },
});

export const { saveTopics } = TopicsReducer.actions;
export default TopicsReducer.reducer;
