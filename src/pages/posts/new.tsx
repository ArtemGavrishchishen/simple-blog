import React from 'react'
import styled from 'styled-components'

import AddPost from '../../features/posts/AddPost'
import BaseLayout from '../../layouts/BaseLayout'

const Title = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const addPost = () => {
  return (
    <>
      <BaseLayout>
        <Title>Add new Post</Title>
        <AddPost />
      </BaseLayout>
    </>
  )
}

export default addPost
