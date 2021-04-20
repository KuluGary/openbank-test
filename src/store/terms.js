import { createSlice } from '@reduxjs/toolkit';

export const termsSlice = createSlice({
    name: "terms",
    initialState: {
        terms: false
    },
    reducers: {
        setTerms: (state, action) => {
            state.terms = action.payload;
        }    
    }
})

export const { setTerms } = termsSlice.actions;
export default termsSlice.reducer;