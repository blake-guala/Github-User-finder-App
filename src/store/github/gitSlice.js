import { createSlice } from "@reduxjs/toolkit";
import { fetchGitThunk, fetchGitThunkRepos, fetchGitThunkUser } from "./gitThunk";

const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    noUserFound: null,
    filteredUsers: [],
    error: null,
    alert: null,
    
    
}

export const gitSlice = createSlice({
    name: 'git',
    initialState,
    reducers: {
        // searchUser: (state, action) => {
        //     state.users = state.filteredUsers.filter(filteredUser => (
        //         filteredUser.login.toLowerCase().includes(action.payload)
        //     ))
        // },
        // noUser: (state,action) => {
        //     state.noUserFound = state.users.action.payload.items.length === 0
        // },
        clearUsers: (state, action) => {
            state.users = []
            state.loading = false
        },
        setAlert: (state, action) => {
            state.alert = action.payload
        },
        removeAlert: (state, action) => {
            state.alert = null
        }

    },
    extraReducers(builder){
        builder
        .addCase(fetchGitThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchGitThunk.fulfilled, (state, action) => {
            state.users = action.payload.data.items
            // state.noUserFound = action.payload.data.items.length
            // state.filteredUsers = action.payload.data.items
            state.loading = false
        })
        .addCase(fetchGitThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(fetchGitThunkUser.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchGitThunkUser.fulfilled, (state, action) => {
            state.user = action.payload.data
            state.loading = false
        })
        .addCase(fetchGitThunkUser.rejected, (state, action) => {
            state.error = action.payload
        })
        .addCase(fetchGitThunkRepos.pending, (state, action) => {
            state.loading = true
        })
        .addCase(fetchGitThunkRepos.fulfilled, (state, action) => {
            state.loading = false
            state.repos = action.payload.data
        })
    }
})
export const { clearUsers, setAlert, removeAlert, noUser } = gitSlice.actions
export default gitSlice.reducer