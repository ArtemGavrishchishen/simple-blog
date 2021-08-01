import React from 'react'
import styled from 'styled-components'

import blog from '../assets/blog.png'
import { toTrimString } from '../helpers'

const Card = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 2px solid #f4f4f4;
  border-radius: 5px;
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

const PostCard = ({ title = 'There is no title post' }) => {
  const checkTitle = !title ? 'There is no title post' : title

  return (
    <Card>
      <Img src={blog.src} alt={checkTitle} />
      <div>{toTrimString(checkTitle)}</div>
    </Card>
  )
}

export default PostCard
