/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

const initialState = {
	userData: null,
};

export const userSlice = createSlice({
	name: "users_slices",
	initialState,
	reducers: {
		AuthenticateUser: (state, action) => {
			state.userData = action.payload;
		},
		LogoutUser: () => {
			// intentionally left blank. It works to trigger the root reducer state purge.
		},
	},
});

export const selectUserInstance = (state: RootState) => state.users_slices;

export const { AuthenticateUser, LogoutUser } = userSlice.actions;

export default userSlice.reducer;
