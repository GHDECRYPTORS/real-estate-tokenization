/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

const initialState = {
	accessToken: null,
	user: {
		_id: null,
		username: null,
		just_signed_up: false,
	},
};

export const userSlice = createSlice({
	name: "users_slices",
	initialState,
	reducers: {
		AuthenticateUser: (state, action) => {
			state.accessToken = action.payload.accessToken;
			state.user._id = action.payload.id;
			state.user.username = action.payload.username;
			state.user.just_signed_up = action.payload.just_signed_up;
		},
		UpdateUserName: (state, action) => {
			state.user.username = action.payload.username;
		},
		LogoutUser: () => {
			// intentionally left blank. It works to trigger the root reducer state purge.
		},
	},
});

export const selectUserInstance = (state: RootState) => state.users_slices;

export const { AuthenticateUser, LogoutUser, UpdateUserName } = userSlice.actions;

export default userSlice.reducer;
