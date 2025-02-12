import posts from '../blogs/posts.json'

export function getBlogPosts() {
  return posts.map((post) => ({
    ...post,
    slug: post.slug,
  }))
}
