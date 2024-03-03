import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { NameReducer } from "./login/nameSlice";
import { SurnameReducer } from "./login/surnameSlice";
import { userReducer } from "./user/userSlice";
import { rentalsReducer } from "./rental/rentalsSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    name:NameReducer,
    surname:SurnameReducer,
    users: userReducer,
    rentals: rentalsReducer
});

export const store = configureStore({reducer:rootReducer});