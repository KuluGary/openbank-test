import { configureStore } from '@reduxjs/toolkit'
import passwordReducer from './password'
import termsReducer from './terms'

export default configureStore({
  reducer: {
    password: passwordReducer,
    terms: termsReducer
  }
})
