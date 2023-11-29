"use client";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/user";
import RoomsReducer from "./reducers/rooms";
import TopicsReducer from "./reducers/topics";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    rooms: RoomsReducer,
    topics: TopicsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
