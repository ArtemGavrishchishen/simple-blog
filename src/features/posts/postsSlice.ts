import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { AppState } from '../../app/store'
import { fetchPosts, addPost, Post } from './postsAPI'

export interface PostsState {
  value: Post[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: PostsState = {
  value: [],
  status: 'idle',
}

export const getPostsAsync = createAsyncThunk('posts/fetchPost', async () => {
  const response = await fetchPosts()

  return response
})

export const addNewPost = createAsyncThunk('posts/addPost', async (post: Post) => {
  const response = await addPost(post)

  return response
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.status = 'loading'
        state.value = []
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = [action.payload, ...state.value]
      })
      .addCase(getPostsAsync.rejected, (state) => {
        state.status = 'failed'
        state.value = []
      })
  },
})

export const selectPosts = (state: AppState) => state.posts.value

export default postsSlice.reducer
