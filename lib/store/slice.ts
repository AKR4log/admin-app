import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthUser } from "../types/auth.interface";
import { IInitialState } from "./types";

const initialState: IInitialState = {
  auth: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<IAuthUser>) => {
      const user = state.auth.find(
        (user) => user.user.id === action.payload.user.id
      );
      if (!user)
        state.auth.push({
          ...action.payload,
        });
    },
  },
});
