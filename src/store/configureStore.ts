import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { NameReducer } from "./login/nameSlice";
import { SurnameReducer } from "./login/surnameSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    name:NameReducer,
    surname:SurnameReducer
});

export const store = configureStore({reducer:rootReducer});