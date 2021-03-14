import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({

    name: "UserSlice",
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: "tech",
        blogData: null
    },
    reducers: {

        setSignedIn: (state, action)=>{
            state.isSignedIn = action.payload
        },
        setUserData: (state, action)=>{
            state.userData = action.payload
        },
        setSearchInput: (state, action)=>{
            state.searchInput = action.payload
        },
        setBlogData: (state,action)=>{
            state.blogData = action.payload
        }

    }

});

// export const {
//     setSignedIn,
//     setUserData,
//     setSearchInput,
//     setBlogData
// } = userSlice.actions;

export const actions = userSlice.actions;

export const selectSignedIn = (state)=> state.user.isSignedIn;
export const selectUserData = (state)=> state.user.selectUserData;
export const selectSearchInput = (state)=> state.user.searchInput;
export const selectBlogData = (state)=> state.user.blogData;

export default userSlice.reducer; 
