import React from 'react'
import styled from 'styled-components'

const Title = styled.h4`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`

const Item = styled.div`
  width: 100%;
  min-height: 25px;
  margin-bottom: 15px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.bgcolors.success};
  transition: background-color 0.2s linear;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.bgcolors.danger};
  }
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

interface Props {
  comments: any
  onSubmitForm: (data: any) => void
}

const CommentsByPost = ({ comments, onSubmitForm }: Props) => {
  return (
    <>
      <Title>Comments</Title>
      <List>
        {comments.map((comment) => (
          <Item key={comment.id}>{comment.body}</Item>
        ))}
      </List>

      <Title>Add comment</Title>
      <form onSubmit={onSubmitForm}>
        <Textarea name="comment" placeholder="Add new comment!" />
        <Button type="submit">Sumbit</Button>
      </form>
    </>
  )
}

export default CommentsByPost
