import { createSlice } from '@reduxjs/toolkit'

//create an initial state for when the obj loads
const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]
//create a slice
//pass in inital state and create reducer
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlice.reducer