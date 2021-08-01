import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useAppDispatch, useForm } from '../../app/hooks'
import { addNewPost } from './postsSlice'

import blog from '../../assets/blog.png'

const Post = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 0 25px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 50%;
    padding: 0 0;
  }
`

const Content = styled.div`
  width: 100%;
  padding: 0 25px;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const Title = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 80px !important;
  resize: none;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 15px 0 15px auto;
  width: 125px;
  font-size: 18px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.success};
  background-color: ${({ theme }) => theme.bgcolors.success};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.bgcolors.danger};
  }
`

const AddPost = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const useFormPost = useForm({
    title: '',
    body: '',
  })

  const handleSubmitPostForm = (post) => {
    dispatch(addNewPost(post))
    router.push('/')
  }

  return (
    <Post>
      <Img src={blog.src} alt="postImg" />
      <Content>
        <form onSubmit={useFormPost((data) => handleSubmitPostForm(data))}>
          <Title name="title" type="text" placeholder="Add title post!" />
          <Textarea name="body" placeholder="Add body post!" />
          <Button type="submit">Sumbit</Button>
        </form>
      </Content>
    </Post>
  )
}

export default AddPost
