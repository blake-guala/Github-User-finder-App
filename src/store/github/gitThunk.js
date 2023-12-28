import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRepos, getUser, getUsers } from "../../utils/api";

export const fetchGitThunk = createAsyncThunk('users/get', async(text) => {
    return getUsers(text)
})

export const fetchGitThunkUser = createAsyncThunk('user/get', async(username) => {
    return getUser(username)
})

export const fetchGitThunkRepos = createAsyncThunk('repos/get', async(login) => {
    return getRepos(login)
})