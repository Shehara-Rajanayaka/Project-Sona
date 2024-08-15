import { createSlice } from "@reduxjs/toolkit";

const init = {
    point:0,
    isLoading:false,
};

const appSlice = createSlice({
    name: "app",
    initialState: init,
    reducers: {
       pointIncrement: (state) => {
        state.point++;
       },     
    },
});

const pointIncrement = appSlice.actions.pointIncrement

export {pointIncrement}

export default appSlice.reducer;
