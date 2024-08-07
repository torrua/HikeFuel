import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
      // console.log(state.user);
    },

    removeUser: (state) => {
      state.user = {};
    },
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;

/* 
payload = {
  id: number,
  email: string,
  is_active: true,
  is_superuser: false,
  is_verified: false,
  username: string,
  first_name: string,
  last_name: string,
};
*/