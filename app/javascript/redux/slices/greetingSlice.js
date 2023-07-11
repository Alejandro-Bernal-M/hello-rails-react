import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGreeting = createAsyncThunk( 'greeting/fetchGreeting', async () => {
  const response = await fetch('/api/v1/greetings')
  const greeting = await response.json()
  const message = greeting.message
  return message
})

const initialState = {
  message: 'Loading...',
  loading: true
}

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.message = action.payload
      state.loading = false
    })
    builder.addCase(fetchGreeting.rejected, (state) => {
      state.message = 'Oh no! Something went wrong!'
      state.loading = false
    })
  }
})

export default greetingSlice.reducer