import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http";


//login
export const login = createAsyncThunk('app/login', async (data) => {
    try {
        const res = await http.post('/login', data);
        return res.data;
    } catch (error) {
        throw error.message;
    }
})


//register
export const getCities = createAsyncThunk('app/getCities', async (data) => {
    try {
        const res = await http.get('/auth/cities');
        return res.data;
    } catch (error) {
        throw error.message;
    }
})

