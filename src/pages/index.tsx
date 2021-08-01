import React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'

import BaseLayout from '../layouts/BaseLayout'
import Posts from '../features/posts/Posts'

const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const IndexPage: NextPage = () => {
  return (
    <>
      <BaseLayout>
        <Title>My Simple blog</Title>
        <Posts />
      </BaseLayout>
    </>
  )
}

export default IndexPage
