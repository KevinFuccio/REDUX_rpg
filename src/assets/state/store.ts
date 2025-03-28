import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobList/index";
import userSlice from "./user/index"
import carSlice from "./carList/index"
import houseSlice from "./houseList/index"
import timeManagement from "./timeManagement";

export const store = configureStore({
  reducer: {
    jobList:jobSlice,
    carList:carSlice,
    houseList:houseSlice,
    user:userSlice,
    timeManage:timeManagement
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
