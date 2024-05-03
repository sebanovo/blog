import path from 'node:path'
import fs from 'node:fs'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

const getMatter = (fileName: string) => {
  const fullPath = path.join(postsDirectory, fileName + '.mdx')
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContent, {})
  return matterResult
}

export const getPostList = () => {
  const files = fs.readdirSync(postsDirectory)
  return files.map(fileName => fileName.replace(/\.mdx$/, ''))
}

export const getPostContent = (fileName: string) => {
  return getMatter(fileName).content
}

export const getPostsMetadataList = () => {
  const listFileNamePost = getPostList()
  return listFileNamePost.map(post => {
    const result = getMatter(post).data
    result.id = post
    return result
  })
}