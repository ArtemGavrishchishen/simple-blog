import React, { useEffect } from 'react'
import get from 'lodash/get'
import omit from 'lodash/omit'

import PostById from '../../components/PostById'
import CommentsByPost from '../../components/CommentsByPost'

import { useAppSelector, useAppDispatch, useForm } from '../../app/hooks'
import { getPostAsync, setPostComment, selectPost } from './postSlice'

interface Props {
  postId: number
}

function Post({ postId }: Props) {
  const dispatch = useAppDispatch()
  const postById = useAppSelector(selectPost)

  const post = omit(postById, ['comments'])
  const comments = get(postById, 'comments', [])

  const useFormComment = useForm({
    comment: '',
  })

  const handleSubmitCommentForm = (comment: string) => {
    if (comment.trim().length === 0) return
    dispatch(setPostComment({ postId: Number(postId), body: comment }))
  }

  useEffect(() => {
    if (postId) {
      dispatch(getPostAsync(postId))
    }
  }, [dispatch, postId])

  return (
    <>
      {post && <PostById post={post} />}
      {comments.length !== 0 && (
        <CommentsByPost
          comments={comments}
          onSubmitForm={useFormComment((data) => handleSubmitCommentForm(data.comment))}
        />
      )}
    </>
  )
}

export default Post
