import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {apiRequest} from "../api/apiRequest.ts";
import type {Post} from "../type/jsonApi.ts";

interface PostsState {
    items: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchPosts = createAsyncThunk<Post[]>(
    'posts/fetchPosts',
    async () => {
        return apiRequest<Post[]>('posts');
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, state => {
                state.loading = false;
                state.error = 'Posts loading error';
            });
    },
});

export default postsSlice.reducer;