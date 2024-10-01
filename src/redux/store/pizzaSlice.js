import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async () => {
  const response = await fetch('http://localhost:3000/db/pizzas.json');
  const data = await response.json();
  return data.pizzas;
});

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default pizzaSlice.reducer;