import axios from 'axios'
import get from 'lodash/get'
import orderBy from 'lodash/orderBy'

axios.defaults.baseURL = 'https://simple-blog-api.crew.red'
axios.defaults.headers.common['Content-Type'] = 'application/json'

export interface Post {
  id?: number
  title?: string
  body?: string
}

export async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get('/posts')

  const result = get(response, 'data', [])

  if (result.lenght !== 0) {
    return orderBy(result, ['id'], ['desc'])
  } else {
    return []
  }
}

export async function addPost(post: Post): Promise<Post> {
  const response = await axios.post('/posts', post)

  const result = get(response, 'data', null)
  return result
}
