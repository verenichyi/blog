import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as uuid from 'uuid';

interface User {
  username: string;
  password: string;
  confirmation?: string;
}

interface State {
  users: User[];
  isAuthorized: boolean;
  username: string;
}

export const initialState: State = {
  users: [],
  isAuthorized: false,
  username: '',
};

const authorization = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state: State, { payload }: PayloadAction<User>) => {
      const { username, password } = payload;
      const user = {
        id: uuid.v4(),
        username,
        password,
      };

      return {
        ...state,
        users: [...state.users, user],
        isAuthorized: true,
        username,
      };
    },
    signIn: (state: State, { payload }: PayloadAction<User>) => {
      const { username, password } = payload;
      const user = state.users.find(
        (user) => user.username === username && user.password === password,
      );

      if (!user) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        isAuthorized: true,
        username,
      };
    },
    signOut: (state: State) => ({
      ...state,
      users: [...state.users],
      isAuthorized: false,
      username: '',
    }),
  },
});

export const authActions = authorization.actions;
export default authorization.reducer;
