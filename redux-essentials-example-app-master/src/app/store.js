import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postSlice'
import usersReducer from '../features/users/usersSlice'
//import post reducer
//have a field called posts, posts will be updated by reducer 

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})
