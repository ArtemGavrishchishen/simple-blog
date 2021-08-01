/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { AppState } from '../../app/store'
import { fetchPost, setComment, Post, Comments } from './postAPI'

export interface PostsState {
  value: Post
  status: 'idle' | 'loading' | 'failed'
}

const initialState: PostsState = {
  value: null,
  status: 'idle',
}

export const getPostAsync = createAsyncThunk('post/fetchPost', async (id: number) => {
  const response = await fetchPost(id)

  return response
})

export const setPostComment = createAsyncThunk('post/setPostComment', async (comment: Comments) => {
  const response = await setComment(comment)

  return response
})

export const postSlice = createSlice({
  name: 'post',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPostAsync.pending, (state) => {
        state.status = 'loading'
        state.value = null
      })
      .addCase(getPostAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
      .addCase(getPostAsync.rejected, (state) => {
        state.status = 'failed'
        state.value = null
      })
      .addCase(setPostComment.fulfilled, ({ status, value }, action) => {
        status = 'idle'
        value.comments = [...value.comments, action.payload]
      })
  },
})

export const selectPost = (state: AppState) => state.post.value

export default postSlice.reducer
