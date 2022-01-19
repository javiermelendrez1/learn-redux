import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

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
    postAdded: {
      //the prepare function will set up the action so our component 
      //does not have to worry about how the payload looks
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    },
    postUpdated(state,action){
      //second param of action will be obj
      const {id,title,content} = action.payload
      //save the obj
      //find find the post
      const existingPost = state.find(post => post.id === id)
      //set post attributes to save param values
      if(existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})
//export actions
export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer