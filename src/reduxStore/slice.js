import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:null
}

export const weatherSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
    
      getDataSuccess: (state, { payload }) => {
        state.data = payload
        state.hasErrors=false;
      }
     
  },
})

// Action creators are generated for each case reducer function
export const {  getDataSuccess} = weatherSlice.actions

export const store = configureStore({
  reducer: weatherSlice.reducer
})
store.subscribe(() => console.log(store.getState()))

// export const dataSelector = state => state.data;

