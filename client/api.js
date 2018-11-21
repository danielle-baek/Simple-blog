import request from 'superagent'

const blogUrl = 'http://localhost:3000/v1/blog'

export function getLogs () {
  return request.get(blogUrl)
    .then(res => {
      const logs = res.body
      console.log('api')
      console.log(logs)
      return logs
    })
    .catch(() => {
      console.error('You need to implement an API route for /v1/')
      return 5
    })
}

export function appendLog (log) {
  // console.log('api')
  return request
    .post(`${blogUrl}/create/`)
    .send(log)
    .then(res => {})
    .catch(() => {
      console.error('You need to implement an API route for /v1/')
      return 5
    })
}

export function getCategories () {
  return request.get(`${blogUrl}/create`)
    .then(res => {
      const categories = res.body
      console.log('api')
      console.log(categories)
      return categories
    })
    .catch(() => {
      console.error('You need to implement an API route for /v1/')
      return 5
    })
}

// export function getPosts () {
//   return request.get('/v1/posts')
//     .then(res => {
//       const posts = res.body
//       return posts
//     })
//     .catch(() => {
//       throw Error('You need to implement an API route for /v1/posts')
//     })
// }

// export function addPost (post) {
//   // convert the large paragraphs string into an array of paragraphs
//   post.paragraphs = post.paragraphs.split('\n')
//   return request.post('/v1/posts')
//     .send(post)
//     .then(res => {
//       const returnedPost = res.body
//       return returnedPost
//     })
// }

// export function updatePost (post) {
//   // convert the large paragraphs string into an array of paragraphs
//   post.paragraphs = post.paragraphs.split('\n')
//   return request.put(`/v1/posts/${post.id}`)
//     .send(post)
//     .then(res => {
//       const returnedPost = res.body
//       return returnedPost
//     })
// }

// export function deletePost (postId) {
//   return request.del(`/v1/posts/${postId}`)
//     .then(res => {
//       const returnedPost = res.body
//       return returnedPost
//     })
// }

// export function getCommentsByPostId (postId) {
//   return request.get(`/v1/posts/${postId}/comments`)
//     .then(res => {
//       const returnedComments = res.body
//       return returnedComments
//     })
// }
