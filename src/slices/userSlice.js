import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
};

// draft
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      const { id } = payload;
      state.user = id
    },
    removeUser: (state) => {
      state.user = '';
    },
  },
});

export const { createUser, removeUser } = userSlice.actions;
export default userSlice.reducer;