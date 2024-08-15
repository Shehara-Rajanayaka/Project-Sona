import { createSlice } from "@reduxjs/toolkit";
import { getCities, login } from "./service";


const init = {
    user: null,
    cityList: [],
    isLoading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState: init,
    reducers: {},
    extraReducers: (builder) => {

        //login
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            console.log('loggin msg',action.payload);
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            console.log('loggin',action.error.message);
        })

        //register
        builder.addCase(getCities.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCities.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cityList = action.payload.cities;
            console.log(action.payload.cities);
        })
        builder.addCase(getCities.rejected, (state) => {
            state.isLoading = false;
            state.error = action.error.message;
        })


    }
});

// export const {} = authSlice.actions;

export default authSlice.reducer;
