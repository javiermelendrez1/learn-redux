import React, { useState } from 'react'
//import useDispatch 
import { useDispatch } from 'react-redux'

//import reducer
import { postAdded } from './postSlice'
export const AddPostForm = () => {
    //create states 
    //these states are not placed in redux store because
    //they are not used outside of this component
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  //when user clicks on the button use postAdded 
  // to push in the obj
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content))

      setTitle('')
      setContent('')
    }
  }
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  )
}