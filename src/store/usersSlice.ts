import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {apiRequest} from "../api/apiRequest.ts";
import type {User} from "../type/jsonApi.ts";

interface UsersState {
    items: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async () => {
        return apiRequest<User[]>('users');
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchUsers.rejected, state => {
                state.loading = false;
                state.error = 'Users loading error';
            });
    },
});

export default usersSlice.reducer;