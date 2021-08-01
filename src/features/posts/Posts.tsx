import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import PostCard from '../../components/PostCard'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getPostsAsync, selectPosts } from './postsSlice'

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

const Item = styled.div`
  width: 320px;
  min-height: 200px;
  margin-bottom: 15px;
  cursor: pointer;

  @media (min-width: 576px) {
    width: 420px;
  }

  @media (min-width: 768px) {
    width: 350px;
  }

  @media (min-width: 1024px) {
    width: 310px;
  }

  &:hover {
    transform: scale(1.025);
  }
`

function Posts() {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPosts)

  useEffect(() => {
    dispatch(getPostsAsync())
  }, [dispatch])

  return (
    <List>
      {posts.map(post => (
        <Item key={post.id}>
          <Link
            href={{
              pathname: '/posts/[id]',
              query: { id: post.id },
            }}
          >
            <a>
              <PostCard title={post.title} />
            </a>
          </Link>
        </Item>
      ))}
    </List>
  )
}

export default Posts
