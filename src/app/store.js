import { configureStore } from '@reduxjs/toolkit'
import auth from '../features/auth/authSlice'
import product from '../features/product/productSlice'

export const store = configureStore({
  reducer: {
    auth,
    product
  },
})