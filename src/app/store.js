import { configureStore } from '@reduxjs/toolkit'
import canchasReducer from '../features/canchasSlice/canchasSlice'

export const store = configureStore({
  reducer: {
    canchas: canchasReducer
  }
})
