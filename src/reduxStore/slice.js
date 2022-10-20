import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  error: false,
};

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    getDataSuccess: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { getDataSuccess } = weatherSlice.actions;

export const store = configureStore({
  reducer: weatherSlice.reducer,
});
store.subscribe(() => console.log(store.getState()));
