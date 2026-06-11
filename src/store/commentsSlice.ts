// src/store/commentsSlice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {apiRequest} from "../api/apiRequest.ts";
import type {Comment} from "../type/jsonApi.ts";

interface CommentsState {
    items: Comment[];
    loading: boolean;
    error: string | null;
}

const initialState: CommentsState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchComments = createAsyncThunk<Comment[]>(
    'comments/fetchComments',
    async () => {
        return apiRequest<Comment[]>('comments');
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchComments.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchComments.rejected, state => {
                state.loading = false;
                state.error = 'Comments loading error';
            });
    },
});

export default commentsSlice.reducer;