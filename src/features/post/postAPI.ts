import axios from 'axios'
import get from 'lodash/get'

axios.defaults.baseURL = 'https://simple-blog-api.crew.red'
axios.defaults.headers.common['Content-Type'] = 'application/json'

export interface Comments {
  id?: number
  postId: number
  body?: string
}

export interface Post {
  id: number
  title?: string
  body?: string
  comments?: Comments[]
}

export async function fetchPost(id: number): Promise<Post> {
  const response = await axios.get(`/posts/${id}?_embed=comments`)

  const result = get(response, 'data', [])
  return result
}

export async function setComment(comment): Promise<Comments> {
  const response = await axios.post(`/comments`, comment)

  const result = get(response, 'data', [])
  return result
}
