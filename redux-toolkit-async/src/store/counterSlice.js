 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterUpdate = createAsyncThunk(
    "counter/counterUpdate",
    async(value, thunkAPI) => {
        const response = await fetch("http://localhost:3000/api/updatecounter",
        // {
        //     method: "post",
        //     body: {name: "hello"}//way to post data to server and can be post using this.post in mirage
        // }
        );
        const data = await response.json();
        return data;

    }
);


export const counterSlice = createSlice( {
    name: "counter",
    initialState: {
        count:0, 
        isLoading: false, 
        error: null

    },
    reducers: {
        increment: (state) =>{
            state.count = state.count+1
            //state.count += 1
        },

        decrement: (state) =>{
            state.count = state.count - 1
        },
        incrementByAmount: (state, action) => {
            state.count = state.count + action.payload
        }
    
    },
    extraReducers: {
        [counterUpdate.fulfilled]: (state, action) => {
            state.count = state.count + action.payload
            state.isLoading = false;
        },
        [counterUpdate.pending]: (state) => {
            state.isLoading = true;
        },
        [counterUpdate.rejected]: (state) => {
            state.isLoading = false
            state.error = "Error"
        }

    }
} )

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer