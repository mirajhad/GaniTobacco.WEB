import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    users:[{
        username:"kdjhfidk",
        email:"djhsfkj",
        password:"shkjdfks"
    }]
}
export const authSlice= createSlice({
    name:'auth',
    initialState ,
    reducers:{
        register:(state, action)=>{
            const { username, email, password } = action.payload;
            const user={
                username,
                email,
                password
            }
            state.users.push(user);
        },
       
    }
})

export const {register} = authSlice.actions
export default authSlice.reducer