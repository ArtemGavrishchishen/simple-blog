import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Post from '../../features/post/Post'
import BaseLayout from '../../layouts/BaseLayout'

const Title = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const post = () => {
  const router = useRouter()
  const id = Number(router.query.id)

  return (
    <>
      <BaseLayout>
        <Title>Post ID: {id} </Title>
        <Post postId={id} />
      </BaseLayout>
    </>
  )
}

export default post
