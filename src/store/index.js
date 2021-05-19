import { configureStore } from '@reduxjs/toolkit'
import passwordReducer from './password'

export default configureStore({
  reducer: {
    password: passwordReducer
  }
})
