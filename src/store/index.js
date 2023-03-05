import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './feature/loginSlice'

const store = configureStore({
    reducer:{
        userLogin:loginSlice
    },
})


export default store