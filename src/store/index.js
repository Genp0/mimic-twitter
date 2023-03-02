import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './feature/usersSlice'

const store = configureStore({
    reducer:{
        user:usersSlice
    },
})


export default store