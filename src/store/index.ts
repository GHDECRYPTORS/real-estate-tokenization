/** @format */
import {
	AnyAction,
	combineReducers,
	configureStore,
	Reducer,
} from "@reduxjs/toolkit";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PersistConfig,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import UserReducer from './slices/user.slice';

const appReducer = combineReducers({
	users_slices: UserReducer,
});

const persistConfig: PersistConfig<any> = {
	key: "root",
	version: 1,
	storage,
	// blacklist: ["search_slices"],
};
export type RootState = ReturnType<typeof appReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
	if (action.type === "users_slices/LogoutUser") {
		// this applies to all keys defined in persistConfig(s)
		storage.removeItem("persist:root");
		state = {} as RootState;
	}
	return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat([]),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
