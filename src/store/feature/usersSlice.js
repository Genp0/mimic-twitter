import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    userId:'112233',
    pwd:'112233',
    name: 'Liu, Paul',
    age: 20
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload
        }
    }
})



export const { setName } = userSlice.actions
export default userSlice.reducer;