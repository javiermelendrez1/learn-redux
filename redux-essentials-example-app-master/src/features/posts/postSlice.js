import { createSlice } from '@reduxjs/toolkit'

//create an initial state for when the obj loads
const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]
//create a slice
//pass in inital state and create reducer
//create a post added reducer 
// takes in  state, and action
//postAdded action will push new state in
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
        state.push(action.payload)
      }
  }
})
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer