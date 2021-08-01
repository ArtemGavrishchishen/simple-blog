import React from 'react'
import styled from 'styled-components'

import blog from '../assets/blog.png'

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

const PostById = ({ post }) => {
  return (
    <Post>
      <Img src={blog.src} alt={post.title} />
      <Content>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </Content>
    </Post>
  )
}

export default PostById
