import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "../redux/reducer/reducer";
import accessSlice from "../redux/reducer/access_token";

const persistConfig = {
  key: "storePersist",
  storage,
};

const reducers = combineReducers({ users: userSlice, access: accessSlice });
const persistReducers = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
