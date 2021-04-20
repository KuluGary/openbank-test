import { createSlice } from '@reduxjs/toolkit';

export const passwordSlice = createSlice({
    name: "password",
    initialState: {
        password: "",
        passwordHint: "",
        passwordError: null,
        passwordHintError: false
    },
    reducers: {
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setPasswordHint: (state, action) => {
            state.passwordHint = action.payload;
        },
        setPasswordError: (state, action) => {
            state.passwordError = action.payload;
        },
        setPasswordHintError: (state, action) => {
            state.passwordHintError = action.payload;
        }
    }
})

export const { setPassword, setPasswordHint, setPasswordError, setPasswordHintError } = passwordSlice.actions;
export default passwordSlice.reducer;