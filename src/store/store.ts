import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./usersSlice.ts";
import postsReducer from "./postsSlice.ts";
import commentsReducer from "./commentsSlice.ts";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;